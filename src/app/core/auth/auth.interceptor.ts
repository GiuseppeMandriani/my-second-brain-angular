import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function authInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
  ) {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      const cloneReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      })
      console.log('Auth')
      return next(cloneReq)
  
    }
    console.log(req)
    return next(req);
  }