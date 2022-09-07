import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightPartComponent } from './right-part/right-part.component';
import { LeftPartComponent } from './left-part/left-part.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPartComponent,
    LeftPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
