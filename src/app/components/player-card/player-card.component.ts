import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  statPosition:number|null = null;
  constructor(private state:StateService) {}
  player = this.state.player$.asObservable().pipe(
    tap(player=>this.statPosition = (player?.stats.length || 0) - (player?.currentStat||0))
  )
  ngOnInit(): void {
  }

  updateStatPosition():void{
    this.state.changeStats(this.statPosition);
  }

}
