import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HuddleAlternateFeatureComponent } from './huddle-alternate-feature.component';

const routes: Routes = [
  {
    path: '',
    component: HuddleAlternateFeatureComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuddleAlternateFeatureRoutingModule { }
