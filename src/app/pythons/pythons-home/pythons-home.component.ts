import { Component } from '@angular/core';


@Component({
  selector: 'app-pythons-home',
  templateUrl: './pythons-home.component.html',
  styleUrls: ['./pythons-home.component.css'],
})
export class PythonsHomeComponent {
  seeModal = false;
  oxGame = ['ox1.jpg', 'ox2.jpg']
  pictLink = '';
  repoLink = '';
  body: any = document.getElementsByTagName('body')[0];

  toggleModal(link: string, repoLink: string) {
    this.seeModal = !this.seeModal;
    this.pictLink = link;
    this.repoLink = repoLink;

    if (this.seeModal) {
      this.body.style.overflow = 'hidden';
    } else {
      this.body.style.overflow = 'auto';
    }
  }


}
