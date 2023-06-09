import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class WikiService {
  constructor(private http: HttpClient) {}
  

  public search(term: string, language: string) {
    return this.http.get('https://'+ language +'.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}

