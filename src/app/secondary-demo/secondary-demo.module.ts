import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryDemoRoutingModule } from './secondary-demo-routing.module';
import { SecondaryDemoViewComponent } from './secondary-demo-view/secondary-demo-view.component';
import { SecondaryProfileSettingsComponent } from './secondary-profile-settings/secondary-profile-settings.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SecondaryDemoViewComponent, SecondaryProfileSettingsComponent],
  imports: [
    CommonModule,
    SecondaryDemoRoutingModule,
    FormsModule,
    TranslateModule.forChild(),
    SharedModule,
  ],
})
export class SecondaryDemoModule {}
