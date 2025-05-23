import { inject, Injectable, signal } from '@angular/core';
import { LocalConfig } from '../../core/api/app-configs/models/app-config-data.model';
import { AppConfigService } from '../../core/api/app-configs/service/app-config.service';

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

  constructor() {
    this.appConfigService.getLocalConfigs().subscribe((response) => {
      this.config.set(response);
    }); 

    
   }

  setTitle(appTitle: string) {
    this.config.update(cfg => ({ ...cfg, appTitle }))
  }

  setColor(color: string) {
    this.config.update(cfg => ({ ...cfg, color }))
  }

  setEnableShop(enableShop: boolean) {
    this.config.update(cfg => ({ ...cfg, enableShop }))
  }
}
