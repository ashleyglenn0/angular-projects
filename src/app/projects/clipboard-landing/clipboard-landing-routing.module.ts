import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClipboardLandingComponent } from './clipboard-landing.component';

const routes: Routes = [
  {
    path: '',
    component: ClipboardLandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipboardLandingRoutingModule { }
