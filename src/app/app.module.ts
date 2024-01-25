import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RecaptchaModule],
  providers: [
    ReCaptchaV3Service,
    provideClientHydration(),
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6Lf531spAAAAAH03JTUWfuQlv2N7YwkiGbECHP_I',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
