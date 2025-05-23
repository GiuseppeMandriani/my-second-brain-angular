import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  config = signal({
    appTitle: 'Angular shop',
    color: '#8b42b3',
    enableShop: true,
  })

  constructor() { }

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
