import { SeriesService } from './../services/series.services/series.service';
import { FilmsService } from './../services/films.services/films.service';
import { Component } from '@angular/core';
import { FilmModel } from '../models/film.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  inputText:string;
  filmsApi:any;
  seriesApi:any;

  constructor(private filmsService:FilmsService, private seriesService:SeriesService) {
    this.inputText = "";
    this.filmsApi = [];
    this.seriesApi = [];
  }

  ngOnInit(){
   
  }

  search() {
    this.filmsService.searchFilms(this.inputText).subscribe(
      data=> {
        this.filmsApi = data;
        this.filmsApi =  this.filmsApi.results;
        console.log(this.filmsApi)
      })
      this.seriesService.searchSeries(this.inputText).subscribe(
        data=> {
          this.seriesApi = data;
          this.seriesApi =  this.seriesApi.results;
          console.log(this.seriesApi)
        })
  }

  twoLists() {
    let totalList:[] = [];
    this.filmsApi;
    this.seriesApi;

    for (let index = 0; index < this.filmsApi.length; index++) {
      
    }
  }

}
