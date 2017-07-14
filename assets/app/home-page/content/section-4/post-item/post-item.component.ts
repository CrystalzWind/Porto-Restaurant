import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'post-item',
  templateUrl: 'post-item.component.jade',
  styleUrls: ['./post-item.component.sass']
})
export class PostItemComponent implements OnInit {
  @Input() item

  constructor() { }

  ngOnInit() {
  }

}
