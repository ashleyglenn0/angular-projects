import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatAppCssRoutingModule } from './chat-app-css-routing.module';
import { ChatAppCssComponent } from './chat-app-css.component';


@NgModule({
  declarations: [ChatAppCssComponent],
  imports: [
    CommonModule,
    ChatAppCssRoutingModule
  ]
})
export class ChatAppCssModule { }
