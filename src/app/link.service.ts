import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(private sanitizer: DomSanitizer) {}

  videoUrl = '';

  getVideoUrl(link: string): SafeResourceUrl {
    if (link.slice(-1) != '/') {  //if youtube link
      this.videoUrl = `https://www.youtube.com/embed/${link}`;
    } else {  //if links to folder with pictures
      this.videoUrl = link;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
