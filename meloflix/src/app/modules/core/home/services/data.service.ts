import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
url = "https://api.themoviedb.org/3/movie/now_playing"
  constructor(private http: HttpClient) { }

  getNowPlaying(): any {
   let params = new HttpParams()
     .set('api_key', environment.api_key)
     .set('language','it-IT')
     .set('page','1')

  return this.http.get(this.url,{params})
  }
}
