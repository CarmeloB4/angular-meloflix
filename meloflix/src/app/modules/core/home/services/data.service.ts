import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Film} from "../../../../shared/models/film";

@Injectable({
  providedIn: 'root'
})
export class DataService {
url = "https://api.themoviedb.org/3/movie/now_playing"
  constructor(private http: HttpClient) { }

  getNowPlaying(): Observable<Film> {
   let params = new HttpParams()
     .set('api_key', environment.api_key)
     .set('language','it-IT')
     .set('page','1')

  return this.http.get<Film>(this.url,{params}).pipe(
    map((data:any) => data.results.map((film) => {
      return {
        id: film.id,
        image: film.poster_path,
        title: film.title,
        exitDate: film.release_date,
        vote: film.vote_average
      }
    }))
  )
  }
}
