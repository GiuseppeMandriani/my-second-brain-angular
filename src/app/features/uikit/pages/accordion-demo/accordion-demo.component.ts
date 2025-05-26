import { Component } from '@angular/core';
import { AccordionItemComponent } from "../../../../shared/components/accordion-item/accordion-item.component";

@Component({
  selector: 'app-accordion-demo',
  imports: [AccordionItemComponent],
  templateUrl: './accordion-demo.component.html',
  styleUrl: './accordion-demo.component.scss'
})
export default class AccordionDemoComponent {

  doSomething() {
    console.log('doSomething')
  }

}
