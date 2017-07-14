import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'section-heading',
  templateUrl: 'section-heading.component.jade',
  styleUrls: ['section-heading.component.sass']
})
export class SectionHeadingComponent {
  @Input() normal_text_1: string = '';
  @Input() bold_text: string = '';
  @Input() normal_text_2: string = '';
  @Input() des: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar magna.' +
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit…';
}
