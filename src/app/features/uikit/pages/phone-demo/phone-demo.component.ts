import { Component } from '@angular/core';
import { PhoneComponent } from "../../../../shared/components/phone/phone.component";

@Component({
  selector: 'app-phone-demo',
  imports: [PhoneComponent],
  templateUrl: './phone-demo.component.html',
  styleUrl: './phone-demo.component.css'
})
export default class PhoneDemoComponent {
  url = 'assets/images/soap-bubbles.jpg';
  alt = 'landscape';
  showTitle: boolean = false;

}
