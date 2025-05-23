import { ToastConfig } from "../../components/toast/model/toast.model";

export const TOAST_PRESETS = {
    success: (message: string): ToastConfig => ({
      message,
      type: 'success',
      duration: 3000
    }),
  
    error: (message: string): ToastConfig => ({
      message,
      type: 'error',
      duration: 5000
    }),
  
    info: (message: string): ToastConfig => ({
      message,
      type: 'info',
      duration: 4000
    })
  };