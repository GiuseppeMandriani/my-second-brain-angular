import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { Navbar2Component } from "./core/components/navbar-2/navbar-2.component";
import { ToastComponent } from "./shared/components/toast/toast.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, NavbarComponent, Navbar2Component, ToastComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public isAppOne: boolean = false;
  public currentLang: string = 'it'; // La lingua predefinita


  constructor(
    private auth: AuthService,
    router: Router,
    private translateService: TranslateService) {
      this.translateService.addLangs(['it', 'en']);
      this.translateService.setDefaultLang('it');
      this.translateService.use('it');
       
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log(event.url)

      }
    })
  }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth.getAccessTokenSilently().subscribe((token) => {
          if (token) {
            localStorage.setItem('token', token); // 🔑 Salvataggio manuale
          }
        });
      }
    });
    // Imposta la lingua predefinita
    this.translateService.setDefaultLang(this.currentLang);
    // Carica la lingua (puoi cambiare tra le lingue disponibili)
    this.translateService.use(this.currentLang);
0
  }
 
  
}
