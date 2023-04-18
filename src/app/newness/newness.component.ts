import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from '../services/films.services/films.service';
import { map,filter } from 'rxjs';

@Component({
  selector: 'app-newness',
  templateUrl: './newness.component.html',
  styleUrls: ['./newness.component.css']
})

export class NewnessComponent implements OnInit {

  //Decorator @Input means that we are going to pass a property from another component. In this case it'd be films (public films:any) froms main-content.component.ts, inside the export class as it's a property
  public films:any;
  public averageVotes:any;
  
  constructor (private filmsService:FilmsService) {
    this.films = [];
    this.averageVotes = [];
  }

  ngOnInit() {
    this.getFilms();
    //this.filmsService.test();
  }


  getFilms() {
    this.filmsService.getJson().
    subscribe(
      data=> {
          this.films = data;
          this.films = this.films.results.slice(0,5);
          console.log("Éstas son las pelis ", this.films);
          this.averageVotes = data;
          this.averageVotes = this.averageVotes.results;
          console.log("Éstas son las valoraciones", this.averageVotes);
      })
    
    }

    average() {
      this.averageVotes;
    }
   
  
 
  
} 
