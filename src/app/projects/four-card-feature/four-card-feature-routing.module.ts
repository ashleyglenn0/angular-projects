import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourCardFeatureComponent } from './four-card-feature.component';

const routes: Routes = [
  {
    path: '',
    component: FourCardFeatureComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourCardFeatureRoutingModule { }
