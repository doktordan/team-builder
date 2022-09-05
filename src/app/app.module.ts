import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { TopContainerComponent } from './components/top-container/top-container.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    SearchBoxComponent,
    TopContainerComponent,
    StatsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
