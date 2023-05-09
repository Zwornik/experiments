import { Component, Input, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  constructor(private linkService: LinkService, private picturesService: PicturesService) {}

  ngOnInit(): void {
    this.picts = this.picturesService.getPicts()
  }

  seeModal = false;
  safeData: any;
  modalType= '';
  picts: any;
  body: any = document.getElementsByTagName('body')[0];


  toggleModal(link: string | string[]) {
    this.seeModal = !this.seeModal;
    if(typeof link == 'string') {
      this.safeData = this.linkService.getVideoUrl(link);
      this.modalType= 'film'}
    else {
      this.safeData = link
      this.modalType= 'image';}

    if (this.seeModal) {
      this.body.style.overflow = 'hidden'; //scroll disalowed
    } else {
      this.body.style.overflow = 'auto'; //scroll allowed
    }
    
  }
}

