import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuddleAlternateFeatureRoutingModule } from './huddle-alternate-feature-routing.module';
import { HuddleAlternateFeatureComponent } from './huddle-alternate-feature.component';


@NgModule({
  declarations: [HuddleAlternateFeatureComponent],
  imports: [
    CommonModule,
    HuddleAlternateFeatureRoutingModule
  ]
})
export class HuddleAlternateFeatureModule { }
