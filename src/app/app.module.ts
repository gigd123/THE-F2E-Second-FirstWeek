import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockContainerComponent } from './clock-container/clock-container.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockContainerComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
