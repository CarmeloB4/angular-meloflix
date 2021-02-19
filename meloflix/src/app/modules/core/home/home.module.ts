import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { LandingComponent } from './components/landing/landing.component';
import { CardComponent } from './components/card/card.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { SeriesListComponent } from './components/series-list/series-list.component';



@NgModule({
  declarations: [ContainerComponent, LandingComponent, CardComponent, FilmListComponent, SeriesListComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
