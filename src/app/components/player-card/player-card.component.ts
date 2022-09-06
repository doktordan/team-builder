import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PlayerDisplayType} from 'src/app/services/state.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnChanges {
  statPosition:number= 0;
  max:number = 0;
  constructor() {}
  @Input() player:PlayerDisplayType = {} as PlayerDisplayType;
  @Output() changeStat = new EventEmitter<number>();
  @Output() filter = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges) {
    this.statPosition = changes['player']?.currentValue?.stats?.length;
    this.max = changes['player']?.currentValue?.stats?.length || 0;
  }

  applyFilter(value:number):void{
    this.filter.emit(value);
  }

  updateStatPosition():void{
    this.changeStat.emit(this.max - this.statPosition) 
  }

}
