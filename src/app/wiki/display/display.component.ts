import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() results: any[] = [];
  @Input() language:any = '';
  

openWiki(item: string){
  window.open('https://' + this.language + '.wikipedia.org?curid=' + item, "_blank")
  console.log("OPEN")
}

}
