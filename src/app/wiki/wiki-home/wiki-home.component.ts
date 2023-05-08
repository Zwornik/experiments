import { Component } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki-home',
  templateUrl: './wiki-home.component.html',
  styleUrls: ['./wiki-home.component.css'],
})
export class WikiHomeComponent {
  constructor(private wiki: WikiService) {}
  results: any[] = [];
  language = 'pl';
  term = '';
  

  setTerm(term: string) {
    this.term = term;
    this.askWiki();
  }

  setLanguage(language: string){
    this.language = language
    this.askWiki();
  };

  askWiki(){
    if(this.term){
    this.wiki.search(this.term, this.language).subscribe((response: any) => {
      this.results = response.query.search;
    })
    console.log(this.results)
  };
  }
}
