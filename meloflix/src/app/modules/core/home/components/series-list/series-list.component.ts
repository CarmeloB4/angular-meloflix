import {Component, Input, OnInit} from '@angular/core';
import {Series} from "../../../../../shared/models/series";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
@Input() series: Series
  constructor() { }

  ngOnInit(): void {
  }

}
