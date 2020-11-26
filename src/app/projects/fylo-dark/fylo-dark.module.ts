import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FyloDarkRoutingModule } from './fylo-dark-routing.module';
import { FyloDarkComponent } from './fylo-dark.component';


@NgModule({
  declarations: [FyloDarkComponent],
  imports: [
    CommonModule,
    FyloDarkRoutingModule
  ]
})
export class FyloDarkModule { }
