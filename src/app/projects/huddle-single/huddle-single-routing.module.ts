import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HuddleSingleComponent } from './huddle-single.component';

const routes: Routes = [
  {
    path: '',
    component: HuddleSingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuddleSingleRoutingModule { }
