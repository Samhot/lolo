import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicExampleComponent implements OnInit {
  config;
  fullpage_api;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      sectionsColor: ['#7BAABE', '#be5077', '#ffad76', '#ffae00', '#7BAABE'],
      anchors: [
        'p1', 'p2', 'p3', 'p4', 'p5',
        'p6', 'p7', 'p8', 'p9', 'p10',
        'p11', 'p12', 'p13', 'p14', 'p15',
        'p16', 'p17', 'p18', 'p19', 'p20'],
      navigation: true,
      scrollingSpeed: 700,
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
