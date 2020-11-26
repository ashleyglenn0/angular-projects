import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialsGridComponent } from './testimonials-grid.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialsGridComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsGridRoutingModule { }
