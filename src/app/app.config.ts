import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { sample } from 'rxjs';
import { TokenInterceptorServiceService } from './servicios/token-interceptor-service.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideRouter(routes),
   // provideHttpClient(),
   provideHttpClient(withInterceptorsFromDi()),
   {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorServiceService,
    multi:true
   }

  ]
  
};