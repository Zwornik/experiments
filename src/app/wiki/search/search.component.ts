import { Component } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
result: any;
  term ='';
constructor( private wiki:WikiService){};

  onSearch(event: any){
    event.preventDefault();
    this.wiki.search(this.term).subscribe((response: any) => {this.result = response.query.search; })
    console.log(this.result)
  }
}
