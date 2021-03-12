import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { LandingComponent } from './components/landing/landing.component';
import { CardComponent } from './components/card/card.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import {SharedModule} from "../../shared/shared.module";
import {IvyCarouselModule} from 'angular-responsive-carousel';




@NgModule({
  declarations: [ContainerComponent, LandingComponent, CardComponent, FilmListComponent, SeriesListComponent],
  exports: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
