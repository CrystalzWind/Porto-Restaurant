import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'section-1-thumb',
  templateUrl: 'thumb.component.jade',
  styleUrls: ['thumb.component.sass']
})
export class Section1ThumbComponent implements OnInit {

  @Input() thumb

  constructor() {}

  ngOnInit() {
  }

}
