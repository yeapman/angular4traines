import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { SecodChildComponent } from './secod-child/secod-child.component';
import {routing} from "./app.routring";
import { MainrouteComponent } from './mainroute/mainroute.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    SecodChildComponent,
    MainrouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
