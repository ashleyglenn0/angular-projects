import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FyloDarkComponent } from './fylo-dark.component';

const routes: Routes = [
  {
    path: '',
    component: FyloDarkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FyloDarkRoutingModule { }
