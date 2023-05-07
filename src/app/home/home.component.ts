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
    this.safeUrl = this.linkService.getVideoUrl(link);
    this.end = link.slice(-3);

    if (this.seeModal) {
      this.body.style.overflow = 'hidden';
    } else {
      this.body.style.overflow = 'auto';
    }
  }
}
