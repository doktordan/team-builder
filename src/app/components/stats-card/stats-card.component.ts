import { Component, Input, OnInit } from '@angular/core';
import { StatisticType } from 'src/app/services/state.service';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
constructor() { }
  @Input()
  get stat(): StatisticType[] { return this._stat; }
  set stat(stat: StatisticType[]) {
    this._stat = stat || [];
  }
  private _stat = [] as StatisticType[];

  @Input()
  get currentStat(): number { return this._currentStat; }
  set currentStat(currentStat: number) {
    this._currentStat = currentStat;
  }
  private _currentStat = 0;
  
  ngOnInit(): void {
  }
}
