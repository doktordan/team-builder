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
type PlayerType = {
  "id":number;
  "fname":string;
	"lname":string;
	"imageUrl":string;
  "number":number;
	"stats":StatisticType[]
}

export interface PlayerTypeApi extends PlayerType {
  "position":number[];
}

interface PlayerDisplayType extends PlayerType {
  "position":string[];
  "currentStat":number;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  url="assets/players.json"
  players:PlayerTypeApi[] = [];
  position:Record<number,string> = {1:'Point Guard',2:'Shooting Guard',3:'Forward',4:'Power Forward',5:'Center'}
  player$ = new BehaviorSubject<PlayerDisplayType | null>(null);
  playerS$ = new BehaviorSubject<PlayerTypeApi[]|null>(null);
  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get<PlayerTypeApi[]>(this.url).pipe(share())
  }
  
  setPlayers(players:PlayerTypeApi[]){
    this.players = players;
    if (this.players.length > 0){
      this.preparePlayer(players[0]);
      this.playerS$.next(this.players);
    }
  }

  preparePlayer(player:PlayerTypeApi):void{
    console.log(player)
    this.player$.next( {
      ...player,
      currentStat:0,
      position:player?.position?.map((position:number)=>this.position[position])
    })
  }

  changeStats(value:number|null){
    if (!value) return;
    const currentStat = (this.player$.value?.stats.length || 0) - value;
    this.player$.next({
      ...this.player$.value!,
      currentStat
    })
  }

}
