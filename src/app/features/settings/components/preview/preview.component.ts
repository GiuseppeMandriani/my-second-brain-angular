import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsService } from '../../../../services/settings/settings.service';

@Component({
  selector: 'app-preview',
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {
  settingsService = inject(SettingsService);
}
