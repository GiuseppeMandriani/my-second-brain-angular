import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../../../services/settings/settings.service';
import { JsonPipe } from '@angular/common';
import { AppConfigService } from '../../../../core/api/app-configs/service/app-config.service';
import { ToastService } from '../../../../services/toast/toast.service';
import { TOAST_PRESETS } from '../../../../shared/configs/toasts/toasts.config';

@Component({
  selector: 'app-editor',
  imports: [JsonPipe],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
  settingsService = inject(SettingsService);
  appConfigService = inject(AppConfigService);
  toastService = inject(ToastService);  


  updateSettings(event: any): void {
  
    this.appConfigService.updateConfig(this.settingsService.config()).subscribe({
      next: updated => {
        console.log('Configurazione salvata:', updated);
        this.toastService.show(TOAST_PRESETS.success('Configurazione salvata!'));
      },
      error: err => {
        console.error('Errore nel salvataggio:', err);
        this.toastService.show(TOAST_PRESETS.error('Errore durante il salvataggio'));
      }
    });
  }
  

}
