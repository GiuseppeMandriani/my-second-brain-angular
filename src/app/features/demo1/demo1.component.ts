import { JsonPipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, noop, of, Subscription, tap } from 'rxjs';
import { UsersService } from '../../services/users/api-users/users.service';

@Component({
  selector: 'app-demo1',
  imports: [UpperCasePipe, JsonPipe],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export default class Demo1Component {

  @Input() title = ''; // get data.title // NEW FROM ANGULAR 16 see app.config providerRoot

  // public title: string = '';


  http = inject(HttpClient)
  users: any[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UsersService) {

    // METODO CLASSICO HTTP GET

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    // .subscribe(res => {
    //   this.users = res;
    // })
  }

  ngOnInit(): void { 
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( s => s.unsubscribe())
  }

  // HTTP GET CON BASE API
  public getUsers() {
    this.subscriptions.push(
      this.userService.getUsers().pipe(
        tap((_res)=> {
          console.log(_res)
          if(_res) {
            this.users  = _res;
          }
        }),
        catchError(
          err => {
            console.error(err);
            return of(null)
          }
        ),
      ).subscribe(noop)
    )

  }

}
