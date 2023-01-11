import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isAboutUs = false
  isSolutions = false
  isNews = false
  isSupport = false

  activeAboutUs$ = fromEvent(window, 'isAboutUs');
  activesolutions$ = fromEvent(window, 'isSolutions');
  activeNews$ = fromEvent(window, 'isNews');
  activeSupport$ = fromEvent(window, 'isSupport');

  constructor() { }
  validator() {
    this.activeAboutUs$.subscribe((x: any) => {
      console.log("val: ", x)
      this.isAboutUs = x['detail']['answer'];
      if (this.isAboutUs === true) {
        this.isNews = false;
        this.isSupport = false;
        this.isSolutions = false;
      }
    })
    this.activesolutions$.subscribe((x: any) => {
      console.log("val: ", x)
      this.isSolutions = x['detail']['answer'];
      if (this.isSolutions === true) {
        this.isNews = false;
        this.isSupport = false;
        this.isAboutUs = false;
      }
    })
    this.activeNews$.subscribe((x: any) => {
      console.log("val: ", x)
      this.isNews = x['detail']['answer'];
      if (this.isNews === true) {
        this.isAboutUs = false;
        this.isSupport = false;
        this.isSolutions = false;
      }
    })
    this.activeSupport$.subscribe((x: any) => {
      console.log("val: ", x)
      this.isSupport = x['detail']['answer'];
      if (this.isSupport === true) {
        this.isNews = false;
        this.isAboutUs = false;
        this.isSolutions = false;
      }
    })
  }
  ngOnInit(): void {
    this.validator()
  }

}
