import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  isAboutUs = false
  isSolutions = false
  isNews = false
  isSupport = false

  constructor() { }

  ngOnInit(): void {
  }

  aboutUs() {
    this.isAboutUs = true;
    let eventIsAboutUs = new CustomEvent('isAboutUs', {
      detail: {
        answer: this.isAboutUs,
      },
    });
    window.dispatchEvent(eventIsAboutUs);
  }
  solutions() {
    this.isSolutions = true;
    let eventIsSolutions = new CustomEvent('isSolutions', {
      detail: {
        answer: this.isSolutions,
      },
    });
    window.dispatchEvent(eventIsSolutions);
  }
  news() {
    this.isNews = true;
    let eventIsNews = new CustomEvent('isNews', {
      detail: {
        answer: this.isNews,
      },
    });
    window.dispatchEvent(eventIsNews);
  }
  support() {
    this.isSupport = true;
    let eventIsSupport = new CustomEvent('isSupport', {
      detail: {
        answer: this.isSupport,
      },
    });
    window.dispatchEvent(eventIsSupport);
  }
}
