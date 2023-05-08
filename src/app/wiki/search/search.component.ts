import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() submitedEvent = new EventEmitter();
  @Output() languageEvent = new EventEmitter();
  term = '';


  onSearch(event: any) {
    if(event != 0) {
    event.preventDefault();}
    this.submitedEvent.emit(this.term);
  }

  onLanguageChange(event: any) {
    this.languageEvent.emit(event.target.value)
    console.log("SEARCH", event.target.value)
  }
}
