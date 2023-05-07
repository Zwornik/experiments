import { Component, Input } from '@angular/core';
import { LinkService } from 'src/app/link.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
})
export class SlidesComponent {
  @Input() link = '';

constructor(private linkService: LinkService){}



}
