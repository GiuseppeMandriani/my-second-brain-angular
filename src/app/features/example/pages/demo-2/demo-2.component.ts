import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-2',
  imports: [UpperCasePipe],
  templateUrl: './demo-2.component.html',
  styleUrl: './demo-2.component.css'
})
export default class Demo2Component {
  @Input() title = ''; // get data.title // NEW FROM ANGULAR 16 see app.config providerRoot

}
