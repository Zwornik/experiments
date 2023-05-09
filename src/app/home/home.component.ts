import { Component } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  seeModal = false;
  safeUrl: any;
  end = '';
  foto = [
    'formidea1.jpg',
    'formidea2.jpg',
    'formidea3.jpg',
    'formidea4.jpg',
    'formidea5.jpg',
  ];
  body: any = document.getElementsByTagName('body')[0];

  constructor(private linkService: LinkService) {}

  toggleModal(link: string) {
    this.seeModal = !this.seeModal;
    if(link.slice(-1) != "/"){  //external link
      this.safeUrl = this.linkService.getVideoUrl(link);
    } else {
      this.safeUrl = link;   //link to folder with pictures
    }

    if (this.seeModal) {
      this.body.style.overflow = 'hidden';  //scroll disalowed
    } else {
      this.body.style.overflow = 'auto';   //scroll allowed
    }
  }
}
