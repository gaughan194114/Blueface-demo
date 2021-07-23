import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryDemoViewComponent } from './primary-demo-view/primary-demo-view.component';

const routes: Routes = [
  {
    path:'',
    component:PrimaryDemoViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryDemoRoutingModule { }
