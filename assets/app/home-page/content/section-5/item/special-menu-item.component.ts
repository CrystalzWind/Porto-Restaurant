import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'special-menu-item',
  templateUrl: 'special-menu-item.component.jade',
  styleUrls: ['special-menu-item.component.sass']
})
export class SpecialMenuItemComponent implements OnInit {
  @Input() dish

  constructor() { }

  ngOnInit() {
  }

}
