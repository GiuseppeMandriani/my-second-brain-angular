import { Component } from '@angular/core';
import { TimelineComponent } from "../../../../shared/components/timeline/timeline.component";
import { Item } from '../../../../shared/components/timeline/model/timeline.model';

@Component({
  selector: 'app-timeline-demo',
  imports: [TimelineComponent],
  templateUrl: './timeline-demo.component.html',
  styleUrl: './timeline-demo.component.css'
})
export default class TimelineDemoComponent {

    timeLineList: Item[] = [
      {
        start: '2008',
        description: 'description 1'
      },
      {
        start: '2009',
        description: 'description 2'
      },
      {
        start: '2020',
        description: 'description 3'
      },
      {
        start: '2030',
        description: 'description 4'
      },
    ]

}
