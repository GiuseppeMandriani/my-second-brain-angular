import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../../services/settings/settings.service';
import { JsonPipe } from '@angular/common';
import { AppConfigService } from '../../../../core/api/app-configs/service/app-config.service';

@Component({
  selector: 'app-editor',
  imports: [JsonPipe],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  settingsService = inject(SettingsService);
  appConfigService = inject(AppConfigService)


  updateSettings(event: any): void {
    console.log(this.settingsService.config());
    // const config = {
    //   "local-config": {
    //     appTitle,
    //     enableShop,
    //     color,
    //   }
    // };
  
    this.appConfigService.updateConfig(this.settingsService.config()).subscribe({
      next: updated => {
        console.log('Configurazione salvata:', updated);
      },
      error: err => {
        console.error('Errore nel salvataggio:', err);
      }
    });
  }
  

}
