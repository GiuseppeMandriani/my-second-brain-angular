import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-3',
  imports: [UpperCasePipe],
  templateUrl: './demo-3.component.html',
  styleUrl: './demo-3.component.css'
})
export default class Demo3Component {
  @Input() title = ''; // get data.title // NEW FROM ANGULAR 16 see app.config providerRoot

}
