import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FyloDataStorageRoutingModule } from './fylo-data-storage-routing.module';
import { FyloDataStorageComponent } from './fylo-data-storage.component';


@NgModule({
  declarations: [FyloDataStorageComponent],
  imports: [
    CommonModule,
    FyloDataStorageRoutingModule
  ]
})
export class FyloDataStorageModule { }
