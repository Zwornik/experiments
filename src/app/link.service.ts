import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  constructor(private sanitizer: DomSanitizer) {}

  videoUrl = '';

  getVideoUrl(link: string): SafeResourceUrl {
    if (link.slice(-3) != 'jpg') {
      this.videoUrl = `https://www.youtube.com/embed/${link}`;
    } else {
      this.videoUrl = link;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
