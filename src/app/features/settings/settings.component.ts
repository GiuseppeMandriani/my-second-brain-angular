import { Component } from '@angular/core';
import { EditorComponent } from "./components/editor/editor.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { ToastComponent } from "../../shared/components/toast/toast.component";

@Component({
  selector: 'app-settings',
  imports: [EditorComponent, PreviewComponent, ToastComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export default class SettingsComponent {

}
