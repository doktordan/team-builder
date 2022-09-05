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
  "id":number;
  "fname":string;
	"lname":string;
	"imageUrl":string;
	"stats":StatisticType[]
}

interface PlayerTypeApi extends PlayerType {
  "position":number[];
}

interface PlayerDisplayType extends PlayerType {
  "position":string[];
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  url="assets/players.json"
  players:PlayerType[] = [];
  position:Record<number,string> = {1:'Point Guard',2:'Shooting Guard',3:'Forward',4:'Power Forward',5:'Center'}
  player$ = new BehaviorSubject<PlayerDisplayType | null>(null)
  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get<PlayerTypeApi[]>(this.url).pipe(share())
  }
  
  setPlayers(players:PlayerTypeApi[]){
    this.players = players;
    if (this.players.length > 0){
      this.player$.next(this.preparePlayer(players[0]));
    }
  }

  preparePlayer(player:PlayerTypeApi):PlayerDisplayType{
    return {...player,position:player?.position?.map((position:number)=>this.position[position])}
  }

}
