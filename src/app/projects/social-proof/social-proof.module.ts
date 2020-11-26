import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProofRoutingModule } from './social-proof-routing.module';
import { SocialProofComponent } from './social-proof.component';


@NgModule({
  declarations: [SocialProofComponent],
  imports: [
    CommonModule,
    SocialProofRoutingModule
  ]
})
export class SocialProofModule { }
