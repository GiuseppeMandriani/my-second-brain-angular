import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VariantIconComponent } from "../variant-icon/variant-icon.component";

@Component({
  selector: 'app-alert',
  imports: [NgClass, VariantIconComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Output() onCancel = new EventEmitter()
  @Output() onConfirm = new EventEmitter()
  @Input() denyLabel = 'no'
  @Input() acceptLabel = 'yes'
  @Input() variant: 'info' | 'success' | 'error' | undefined;

}
