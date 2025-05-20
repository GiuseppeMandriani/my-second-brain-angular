import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo1',
  imports: [UpperCasePipe],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export default class Demo1Component {

  @Input() title = ''; // get data.title // NEW FROM ANGULAR 16 see app.config providerRoot

  // public title: string = '';

  constructor(private activateRoute: ActivatedRoute) {
    // this.title = this.activateRoute.snapshot.data['title'];

    // this.activateRoute.data.subscribe(res => {
    //   console.log(res['title'])
    // })
  }

}
