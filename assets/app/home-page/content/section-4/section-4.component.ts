import { Component, OnInit } from '@angular/core';
import {PostItem} from "./post-item/post-item";
import {Member} from "./member/member";

@Component({
  selector: 'content-section-4',
  templateUrl: 'section-4.component.jade',
  styleUrls: ['./section-4.component.sass']
})
export class Section4Component implements OnInit {

  postItems: PostItem[] = [
    new PostItem('./images/section-4/blog-restaurant-6-160x160.jpg', 'Lorem ipsum dolor sit', "Lorem ipsum dolor sit amet, gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem..."),
    new PostItem('./images/section-4/blog-restaurant-4-160x160.jpg', 'Lorem ipsum dolor sit', "Lorem ipsum dolor sit amet, gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem..."),
  ]

  members: Member[] = [
    new Member('./images/section-4/team-26.jpg', 'Jessica Doe', 'Shef'),
    new Member('./images/section-4/team-27.jpg', 'John Doe', 'Shef')
  ]

  constructor() { }

  ngOnInit() {
  }

}
