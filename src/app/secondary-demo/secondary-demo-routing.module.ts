import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondaryDemoViewComponent } from './secondary-demo-view/secondary-demo-view.component';

const routes: Routes = [
  {
    path: '',
    component: SecondaryDemoViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondaryDemoRoutingModule {}
