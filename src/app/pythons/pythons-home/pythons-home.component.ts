import { Component, OnInit } from '@angular/core';
import { PicturesService } from 'src/app/pictures.service';

@Component({
  selector: 'app-pythons-home',
  templateUrl: './pythons-home.component.html',
  styleUrls: ['./pythons-home.component.css'],
})
export class PythonsHomeComponent implements OnInit {
  constructor(private picturesService: PicturesService) {}

  ngOnInit(): void {
    this.picts = this.picturesService.getPicts();
  }

  seeModal = false;
  modalType = 'image';
  folder: any;
  repoLink = '';
  picts: any;
  body: any = document.getElementsByTagName('body')[0];

  toggleModal(link: string | string[], repoLink: string) {
    this.seeModal = !this.seeModal;
    this.repoLink = repoLink;
    this.folder = link;
    this.modalType = 'image';

    if (this.seeModal) {
      this.body.style.overflow = 'hidden'; //scroll disalowed
    } else {
      this.body.style.overflow = 'auto'; //scroll allowed
    }
    console.log("HOME", this.picts, this.folder);
  };
}
