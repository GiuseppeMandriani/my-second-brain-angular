import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variant-icon',
  imports: [],
  templateUrl: './variant-icon.component.html',
  styleUrl: './variant-icon.component.scss'
})
export class VariantIconComponent {
  @Input() variant: 'info' | 'success' | 'error' | undefined;

}
