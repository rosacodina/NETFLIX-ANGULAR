import { MainContentModel } from './main/main-content.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NewnessComponent } from './newness/newness.component';
import { SeriesComponent } from './series/series.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent, 
    FooterComponent, 
    NewnessComponent,
    SeriesComponent,
    SearchComponent,
    SearchResultsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
