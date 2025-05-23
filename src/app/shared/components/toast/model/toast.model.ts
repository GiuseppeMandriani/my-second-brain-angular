export interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info';
  id: number;
}

export interface ToastConfig {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
}
