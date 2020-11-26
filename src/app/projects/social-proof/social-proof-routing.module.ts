import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialProofComponent } from './social-proof.component';

const routes: Routes = [
  {
    path: '',
    component: SocialProofComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialProofRoutingModule { }
