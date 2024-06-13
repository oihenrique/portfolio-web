import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() link: string = '';  
  @Input() tag1: string = '';
  @Input() tag2: string = '';
  @Input() tag3: string = '';
  @Input() tagColor1: string = '';
  @Input() tagColor2: string = '';
  @Input() tagColor3: string = '';
}
