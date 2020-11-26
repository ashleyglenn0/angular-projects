import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FyloTwoColumnRoutingModule } from './fylo-two-column-routing.module';
import { FyloTwoColumnComponent } from './fylo-two-column.component';


@NgModule({
  declarations: [FyloTwoColumnComponent],
  imports: [
    CommonModule,
    FyloTwoColumnRoutingModule
  ]
})
export class FyloTwoColumnModule { }
