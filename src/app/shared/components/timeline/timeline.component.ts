import { booleanAttribute, Component, Input } from '@angular/core';
import { Item } from './model/timeline.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() items: Item[] = [];
  @Input({transform : booleanAttribute}) isVertical:boolean = false;

}
