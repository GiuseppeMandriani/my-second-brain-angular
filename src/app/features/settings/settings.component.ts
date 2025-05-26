import { Component } from '@angular/core';
import { EditorComponent } from "./components/editor/editor.component";
import { PreviewComponent } from "./components/preview/preview.component";

@Component({
  selector: 'app-settings',
  imports: [EditorComponent, PreviewComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export default class SettingsComponent {

}
