import { Component, OnInit } from '@angular/core';
import {SpecialMenuItem} from "./item/special-menu-item";

@Component({
  selector: 'special-menu',
  templateUrl: 'special-menu.component.jade',
  styleUrls: ['special-menu.component.sass']
})
export class SpecialMenuComponent implements OnInit {

  SpecialMenuList: SpecialMenuItem[] = [
    new SpecialMenuItem('./images/section_5/product-14.jpg', 'Monday', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
          ' Donec eu pulvinar magna.', '$29'),
    new SpecialMenuItem('./images/section_5/product-15.jpg', 'Tuesday', 'Lorem ipsum dolor sit amet. Donec eu pulvinar magna.', '$39'),
    new SpecialMenuItem('./images/section_5/product-16.jpg', 'Wednesday', 'Lorem ipsum dolor sit amet.', '$24'),
    new SpecialMenuItem('./images/section_5/product-17.jpg', 'Thursday', 'Lorem ipsum dolor sit amet magna.', '$39'),
    new SpecialMenuItem('./images/section_5/product-18.jpg', 'Friday', 'Lorem ipsum dolor sit amet adipiscing elit.' +
        ' Donec eu pulvinar magna.', '$59')
  ]

  constructor() { }

  ngOnInit() {
  }

}
