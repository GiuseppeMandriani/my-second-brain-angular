import { computed, inject, Injectable, signal } from '@angular/core';
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

  appTitle = computed(() => this.config().appTitle)
  color = computed(() => this.config().color)
  isShopEnabled = computed(() => this.config().enableShop)

  constructor() {
    this.appConfigService.getLocalConfigs().subscribe((response) => {
      this.config.set(response);
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
