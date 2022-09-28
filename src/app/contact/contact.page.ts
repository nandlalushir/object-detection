import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage {
  constructor() {}

  socialMedia(iconName) {
    if (iconName) {
      switch (iconName) {
        case 'FACEBOOK':
          window.open('https://www.facebook.com/Tietoevryin/', '_self');
          break;
        case 'INSTAGRAM':
          window.open('https://www.instagram.com/tietoevry/', '_self');
          break;
        case 'TWITTER':
          window.open('https://twitter.com/Tietoevry/', '_self');
          break;
        case 'YOUTUBE':
          window.open('https://www.youtube.com/c/TietoEVRY', '_self');
          break;
      }
    }
  }
}
