import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent {
  @Input() data: any[] = [];
  selected = -1;

}
