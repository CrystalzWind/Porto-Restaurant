import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: 'member.component.jade',
  styleUrls: ['member.component.sass']
})
export class MemberComponent implements OnInit {
  @Input() member

  constructor() { }

  ngOnInit() {
  }

}
