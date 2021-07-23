import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Blueface-demo';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'es']);
    this.translate.setDefaultLang('en');
  }
}
