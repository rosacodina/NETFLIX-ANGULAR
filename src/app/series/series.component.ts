
import { Component, OnInit, Input } from '@angular/core';
import { SeriesService } from '../services/series.services/series.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit{

  //Decorator @Input means that we are going to pass a property from another component. In this case it'd be films (public films:any) froms main-content.component.ts, inside the export class as it's a property
  public series:any;
  
  constructor (private seriesService:SeriesService) {
    this.series = [];
    
  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.seriesService.getJson().
    subscribe(
      data=> {
          this.series = data;
          this.series = this.series.results.slice(0,5);
          console.log("Éstas son las series ", this.series);
          
      }
    )
}}

