import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-section-1',
  templateUrl: 'section-1.component.jade',
  styleUrls: ['thumb.component.sass']
})
export class Section1Component implements OnInit {

  thumbs = [
    {
      imagePath: './images/section_1/blog-restaurant-1.png',
      icon: './images/section_1/restaurant-icon-1.png',
      caption: 'Sweets',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit…'
    },
    {
      imagePath: './images/section_1/blog-restaurant-2.png',
      icon: './images/section_1/restaurant-icon-2.png',
      caption: 'Coffee & Beer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit…'
    },
    {
      imagePath: './images/section_1/blog-restaurant-3.png',
      icon: './images/section_1/restaurant-icon-3.png',
      caption: 'Cake & Cookies',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit…'
    }
]

  constructor() { }

  ngOnInit() {
  }

}
