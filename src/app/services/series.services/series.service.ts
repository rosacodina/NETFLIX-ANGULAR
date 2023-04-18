import { MainContentModel } from '../../main/main-content.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private url:string = "https://api.themoviedb.org/3/discover/tv?api_key=bd63fbddfbd28840cd400442498e2eb1&language=en-US&query=batman&page=1&include_adult=false";
  private urlSearchSeries:string = "https://api.themoviedb.org/3/search/tv?api_key=bd63fbddfbd28840cd400442498e2eb1&language=en-US&query=";
  constructor(private http:HttpClient) {}

  getJson(){
    return this.http.get<MainContentModel>(this.url);
  }
  
  searchSeries(term:string) {
    let userUrl:string = this.urlSearchSeries + term + "&page=1&include_adult=false";
    console.log(userUrl);
    return this.http.get(userUrl);
  }
}
