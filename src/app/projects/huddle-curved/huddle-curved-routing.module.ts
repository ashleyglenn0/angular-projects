import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HuddleCurvedComponent } from './huddle-curved.component';

const routes: Routes = [
  {
    path: '',
    component: HuddleCurvedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuddleCurvedRoutingModule { }
