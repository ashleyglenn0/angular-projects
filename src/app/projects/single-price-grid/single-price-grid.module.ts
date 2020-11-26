import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePriceGridRoutingModule } from './single-price-grid-routing.module';
import { SinglePriceGridComponent } from './single-price-grid.component';


@NgModule({
  declarations: [SinglePriceGridComponent],
  imports: [
    CommonModule,
    SinglePriceGridRoutingModule
  ]
})
export class SinglePriceGridModule { }
