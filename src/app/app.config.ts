import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],
};
