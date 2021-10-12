import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SigmaComponent } from "./sigma/sigma.component";
import { ForceAtlas2Component } from "./force-atlas2/force-atlas2.component";
import { ZoomComponent } from './zoom/zoom.component';

@NgModule({
  declarations: [AppComponent, SigmaComponent, ForceAtlas2Component, ZoomComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
