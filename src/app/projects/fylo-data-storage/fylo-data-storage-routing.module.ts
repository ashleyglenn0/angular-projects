import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FyloDataStorageComponent } from './fylo-data-storage.component';

const routes: Routes = [
  {
    path: '',
    component: FyloDataStorageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FyloDataStorageRoutingModule { }
