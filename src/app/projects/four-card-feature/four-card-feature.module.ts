import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourCardFeatureRoutingModule } from './four-card-feature-routing.module';
import { FourCardFeatureComponent } from './four-card-feature.component';
import { SingleCardComponent } from './single-card/single-card.component';


@NgModule({
  declarations: [FourCardFeatureComponent, SingleCardComponent],
  imports: [
    CommonModule,
    FourCardFeatureRoutingModule
  ]
})
export class FourCardFeatureModule { }
