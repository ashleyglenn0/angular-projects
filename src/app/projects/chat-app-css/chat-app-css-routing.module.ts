import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatAppCssComponent } from './chat-app-css.component';

const routes: Routes = [
  {
    path: '',
    component: ChatAppCssComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatAppCssRoutingModule { }
