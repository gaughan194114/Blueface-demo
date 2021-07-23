import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public selectedLang = 'en';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  public updateLang() {
    this.translate.use(this.selectedLang);
  }
}
