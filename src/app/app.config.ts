import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/auth/auth.interceptor';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()), 
    provideHttpClient(
      withInterceptors([authInterceptor, authHttpInterceptorFn])
    ),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    })]),
    provideAuth0({
      domain: 'dev-o6xn1nikts522mpm.us.auth0.com',
      clientId: 'rEKcOHJ9baX6LpXREoZaXv4x3wAGABPl',
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [
          { uri: 'https://json-server-api-v7rs.onrender.com*'}
        ]
      },
      cacheLocation: 'localstorage', // 👈 persiste tra refresh
      useRefreshTokens: true         // 👈 aggiorna automaticamente i token
      
    })
  ]
};
