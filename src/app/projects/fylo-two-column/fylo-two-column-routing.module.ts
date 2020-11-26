import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FyloTwoColumnComponent } from './fylo-two-column.component';

const routes: Routes = [
  {
    path: '',
    component: FyloTwoColumnComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FyloTwoColumnRoutingModule { }
