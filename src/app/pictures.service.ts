import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor() { }

  picts = {
    filemanag: ['file-manag', 'file-manager1.jpg'],
    formidea: ['formidea',
      'formidea1.jpg',
      'formidea2.jpg',
      'formidea3.jpg',
      'formidea4.jpg',
      'formidea5.jpg',
    ],
    oxGame: ['oxGame', 'ox1.jpg', 'ox2.jpg'],
    vending: ['vending', 'vending1.jpg'],
  };

  getPicts(){
    return this.picts;
  }
}
