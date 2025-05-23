import { Injectable, signal } from '@angular/core';
import { ToastConfig, ToastMessage } from '../../shared/components/toast/model/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private counter = 0;
  private _toasts = signal<ToastMessage[]>([]);

  toasts = this._toasts;

  constructor() { }

  show(toastConfig: ToastConfig) {
    const {
      message,
      type = 'info',
      duration = 3000
    } = toastConfig;
  
    const toast: ToastMessage = {
      id: ++this.counter,
      message,
      type,
    };
  
    this._toasts.update((current) => {
      const updated = [...current, toast];
      return updated.slice(-5); // massimo 5 visibili
    });
  
    setTimeout(() => this.remove(toast.id), duration);
  }

  remove(id: number) {
    this._toasts.update((current) => current.filter(t => t.id !== id));
  }
}
