import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuddleSingleRoutingModule } from './huddle-single-routing.module';
import { HuddleSingleComponent } from './huddle-single.component';


@NgModule({
  declarations: [HuddleSingleComponent],
  imports: [
    CommonModule,
    HuddleSingleRoutingModule
  ]
})
export class HuddleSingleModule { }
