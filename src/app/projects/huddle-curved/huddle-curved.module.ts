import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuddleCurvedRoutingModule } from './huddle-curved-routing.module';
import { HuddleCurvedComponent } from './huddle-curved.component';


@NgModule({
  declarations: [HuddleCurvedComponent],
  imports: [
    CommonModule,
    HuddleCurvedRoutingModule
  ]
})
export class HuddleCurvedModule { }
