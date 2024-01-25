import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';

  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public executeImportantAction(): void {
    this.recaptchaV3Service
      .execute('importantAction')
      .subscribe((token) => console.log(token));
  }
}
