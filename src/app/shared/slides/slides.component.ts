import { Component, Input, HostListener, OnInit } from '@angular/core';
import { LinkService } from 'src/app/link.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
})
export class SlidesComponent implements OnInit {
  link = '';
  @Input() pictList: string[] = [];
  currentPict = 1;

  ngOnInit(): void {
    this.link = `./assets/images/${this.pictList[0]}/${this.pictList[1]}`;
    console.log('SLIDES LINK', this.link);
  }

  constructor(private linkService: LinkService) {}

  leftClick(event: Event) {
    event.stopPropagation();
    if (this.currentPict > 1) {
      this.currentPict -= 1;
      this.createLink();
    }
  }

  rightClick(event: Event) {
    event.stopPropagation();
    if (this.currentPict < this.pictList.length - 1) {
      this.currentPict += 1;
      this.createLink();
    } 
  }

  createLink() {
    this.link = `./assets/images/${this.pictList[0]}/${
      this.pictList[this.currentPict]
    }`;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'ArrowLeft') {
      // left arrow on keyboard
      this.leftClick(event);
      console.log('ARROW');
    }
    if (event.code === 'ArrowRight') {
      //right arrow on keyboard
      this.rightClick(event);
    }
  }

  stopPropagation(event: Event){
    event.stopPropagation()
  }
}
