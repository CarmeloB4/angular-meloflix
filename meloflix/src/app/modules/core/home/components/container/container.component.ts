import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
data: Observable<any>
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.data = this.service.getNowPlaying()
  }

}
