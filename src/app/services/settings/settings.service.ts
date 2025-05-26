import { computed, inject, Injectable, signal } from '@angular/core';
import { LocalConfig } from '../../core/api/app-configs/models/app-config-data.model';
import { AppConfigService } from '../../core/api/app-configs/service/app-config.service';
import { AuthService } from '@auth0/auth0-angular';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  config = signal<LocalConfig>({
    appTitle: 'Angular shop',
    color: '#8b42b3',
    enableShop: true,
  })

  appConfigService = inject(AppConfigService);

  appTitle = computed(() => this.config().appTitle)
  color = computed(() => this.config().color)
  isShopEnabled = computed(() => this.config().enableShop)

  auth = inject(AuthService);

  constructor() {
    // this.appConfigService.getLocalConfigs().subscribe((response) => {
    //   this.config.set(response);
    // }); 

    this.auth.isAuthenticated$.pipe(take(1)).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        // Se l'utente è loggato, fai la chiamata
        this.appConfigService.getLocalConfigs().subscribe((response) => {
          this.config.set(response);
        }); 
      } else {
        // Altrimenti, puoi decidere di reindirizzare o mostrare un messaggio
        console.warn('Utente non autenticato');
      }
    });

    
   }



  setConfig<T extends keyof LocalConfig>(propName: T, value: LocalConfig[T]) {
    this.config.update(cfg => ({ ...cfg, [propName]: value }))
  }

  // setTitle(appTitle: string) {
  //   this.config.update(cfg => ({ ...cfg, appTitle }))
  // }

  // setColor(color: string) {
  //   this.config.update(cfg => ({ ...cfg, color }))
  // }

  // setEnableShop(enableShop: boolean) {
  //   this.config.update(cfg => ({ ...cfg, enableShop }))
  // }
}
