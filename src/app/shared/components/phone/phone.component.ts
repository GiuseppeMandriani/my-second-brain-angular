import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone',
  imports: [],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {

  // @Input({required: true}) url: string = '';
  @Input({ alias: 'src', required: true })
  url: string = ''
  @Input({ transform: (val: string) => {
    return val.toUpperCase()
  }}) alt: string = 'image'
  @Input({ transform: booleanAttribute}) // Permette di non inserire le [] nell'attributo
  showTitle = false;

}
