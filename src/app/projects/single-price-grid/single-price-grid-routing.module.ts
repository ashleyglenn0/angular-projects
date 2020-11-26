import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePriceGridComponent } from './single-price-grid.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePriceGridComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePriceGridRoutingModule { }
