import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryDemoModule } from './primary-demo/primary-demo.module';
import { SecondaryDemoModule } from './secondary-demo/secondary-demo.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'primary-demo',
    pathMatch: 'full',
  },
  {
    path: 'primary-demo',
    loadChildren: () => PrimaryDemoModule,
  },
  {
    path: 'secondary-demo',
    loadChildren: () => SecondaryDemoModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
