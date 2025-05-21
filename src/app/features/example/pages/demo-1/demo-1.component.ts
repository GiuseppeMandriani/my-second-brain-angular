import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, Input, signal } from '@angular/core';
import { IUserResponse } from '../../../../core/api/users/models/users-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, delay, noop, of, Subscription, tap } from 'rxjs';
import { UsersService } from '../../../../core/api/users/service/users.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-demo-1',
  imports: [UpperCasePipe],
  templateUrl: './demo-1.component.html',
  styleUrl: './demo-1.component.css'
})
export default class Demo1Component {
  @Input() title = ''; // get data.title // NEW FROM ANGULAR 16 see app.config providerRoot

  // public title: string = '';


  http = inject(HttpClient)
  users: IUserResponse[] = [];
  usersSignal = signal<IUserResponse[]>([])


  usersList = toSignal(
    inject(HttpClient)
    .get<IUserResponse[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      delay(2000)
    )
  )

  names = computed(() => this.usersList()?.map(u => u.name));

  private subscriptions: Subscription[] = [];

  constructor(
    private userService: UsersService) {

    // METODO CLASSICO HTTP GET

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    // .subscribe(res => {
    //   this.users = res;
    // })


    // METODO CON SIGNALS

    this.userService.getUsers().subscribe( res => {
      this.usersSignal.set(res);
    })

    // METODO CON BASE API

    this.getUsersList();

  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptions.forEach( s => s.unsubscribe())
  }

  // HTTP GET CON BASE API
  public getUsersList() {
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
