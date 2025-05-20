import { Component } from '@angular/core';
import { DropDownItem, DropdownComponent } from '../../../../shared/components/dropdown/dropdown.component';

@Component({
  selector: 'app-dropdown-demo',
  imports: [DropdownComponent],
  templateUrl: './dropdown-demo.component.html',
  styleUrl: './dropdown-demo.component.css'
})
export default class DropdownDemoComponent {

  list = [
    { label: 'item 1', value: 1},
    { label: 'item 2', value: 2},
    { label: 'item 3', value: 'something'},
  ]

  doSomethingDropdown(event: DropDownItem) {
    console.log('do something', event)
  }

}
