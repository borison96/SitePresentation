import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ImageTopComponent } from './image-top/image-top.component';
import { MainBodyComponent } from './main-body/main-body.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      ImageTopComponent,
      MainBodyComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
