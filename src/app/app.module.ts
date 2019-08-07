import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ClockComponent } from './clock/clock.component';
import { CountDownService } from '../app/services/count-down.service';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CountDownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
