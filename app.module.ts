import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighlightPipe } from './highlight.pipe';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TaskComponent } from './task/task.component';
import { TodoModule } from './todo/todo.module';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightPipe,
    HoverEffectPipe,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
