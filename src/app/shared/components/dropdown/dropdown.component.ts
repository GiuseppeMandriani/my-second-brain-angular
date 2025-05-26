import { NgClass } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

export type DropDownItem = {
  label: string;
  value: any;
}

@Component({
  selector: 'app-dropdown',
  imports: [NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() items: DropDownItem[] = [];
  @Input() placement: 'left' | 'right' | 'bottom' | 'top' = 'bottom';
  @Input({ transform: booleanAttribute}) hover: boolean = false;
  @Output() select = new EventEmitter<DropDownItem>()

  itemClick(item: DropDownItem) {
    this.select.emit(item);
    const el = document.activeElement as HTMLElement;
    el.blur();
  }

}
