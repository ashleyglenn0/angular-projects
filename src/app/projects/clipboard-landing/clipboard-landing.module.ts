import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardLandingRoutingModule } from './clipboard-landing-routing.module';
import { ClipboardLandingComponent } from './clipboard-landing.component';


@NgModule({
  declarations: [ClipboardLandingComponent],
  imports: [
    CommonModule,
    ClipboardLandingRoutingModule
  ]
})
export class ClipboardLandingModule { }
