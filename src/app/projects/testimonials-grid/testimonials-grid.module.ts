import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsGridRoutingModule } from './testimonials-grid-routing.module';
import { TestimonialsGridComponent } from './testimonials-grid.component';


@NgModule({
  declarations: [TestimonialsGridComponent],
  imports: [
    CommonModule,
    TestimonialsGridRoutingModule
  ]
})
export class TestimonialsGridModule { }
