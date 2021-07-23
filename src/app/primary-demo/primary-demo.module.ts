import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryDemoRoutingModule } from './primary-demo-routing.module';
import { PrimaryDemoViewComponent } from './primary-demo-view/primary-demo-view.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PrimaryDemoViewComponent, ProfileSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PrimaryDemoRoutingModule,
    TranslateModule,
  ],
})
export class PrimaryDemoModule {}
