import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {

  constructor(private state:StateService) { }
  stats = this.state.player$.asObservable().pipe(
    map(player=>player?.stats[player.currentStat])
    );
  ngOnInit(): void {
  }

}
