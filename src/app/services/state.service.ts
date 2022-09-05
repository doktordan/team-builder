import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscriber, throwError } from 'rxjs';
import { catchError, retry, share } from 'rxjs/operators';

export type StatisticType = {
    "team":string;
    "year":number;
    "pts":number;
    "fg":number;
    "3pt":number;
    "reb":number;
    "ast":number;
    "stl":number;
    "blk":number;
}
export type PlayerType = {
  "fname":string;
	"lname":string;
	"position":number[];
	"imageUrl":string;
	"stats":StatisticType[]
}
@Injectable({
  providedIn: 'root'
})
export class StateService {

  url="assets/players.json"
  players = [];
  player$ = new BehaviorSubject<PlayerType | null>(null)
  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get<PlayerType[]>(this.url).pipe(share())
  }
  
  setPlayers(players:any){
    this.players = players;
    if (this.players.length > 0){
      this.player$.next(players[0])
    }
  }

}
