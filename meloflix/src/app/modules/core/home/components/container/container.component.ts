import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";
import {Film} from "../../../../../shared/models/film";
import {Series} from "../../../../../shared/models/series";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
data: Observable<Film>
series: Observable<Series>
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.data = this.service.getNowPlaying()
    this.series = this.service.getPopular()
  }

}
