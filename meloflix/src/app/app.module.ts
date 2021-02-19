import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/core/home/home.module';
import { ToolBarComponent } from './shared/components/tool-bar/tool-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {SharedModule} from "./modules/shared/shared.module";

const appComponents = [
  AppComponent,
  ToolBarComponent,
  FooterComponent
]

const appModules = [
  BrowserModule,
  AppRoutingModule,
  HomeModule,
  SharedModule
]

@NgModule({
  declarations: [...appComponents],
  imports: [...appModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
