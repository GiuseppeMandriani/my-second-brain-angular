import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  @Input() title = ''
  @Input() groupName = 'accordion-group'
  @Input({ transform: booleanAttribute }) selected = false

}
