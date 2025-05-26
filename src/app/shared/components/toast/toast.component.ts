import { Component, computed, signal } from '@angular/core';
import { ToastMessage } from './model/toast.model';
import { ToastService } from '../../../services/toast/toast.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  toasts = computed(() => this.toastService.toasts());

  constructor(private toastService: ToastService) {}

  typeClass(type: 'success' | 'error' | 'info'): string {
    return {
      success: 'alert-success',
      error: 'alert-error',
      info: 'alert-info'
    }[type];
  }

}
