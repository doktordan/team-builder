import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { TopContainerComponent } from './components/top-container/top-container.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    SearchBoxComponent,
    TopContainerComponent,
    StatsCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
