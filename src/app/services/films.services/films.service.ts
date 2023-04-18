import { MainContentModel } from '../../main/main-content.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url:string = "https://api.themoviedb.org/3/search/movie?api_key=bd63fbddfbd28840cd400442498e2eb1&language=en-US&query=batman&page=1&include_adult=false";
  private urlSearchFilms:string = "https://api.themoviedb.org/3/search/movie?api_key=bd63fbddfbd28840cd400442498e2eb1&language=en-US&query=";
  
  constructor(private http:HttpClient) {}

  getJson(){
    return this.http.get(this.url);
  }

  searchFilms(term:string) {
    let userUrl:string = this.urlSearchFilms + term + "&page=1&include_adult=false";
    console.log(userUrl);
    return this.http.get(userUrl);
  }
}
