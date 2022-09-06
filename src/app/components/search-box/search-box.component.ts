import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PlayerTypeApi, StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnChanges {
  constructor(private state:StateService) {}
  position:Record<number,string> = {1:'Point Guard',2:'Shooting Guard',3:'Forward',4:'Power Forward',5:'Center'};
  @Input() filters:number[] = [];
  @Input() players:PlayerTypeApi[] = [];
  @Output() filter = new EventEmitter<number>();
  @Output() player = new EventEmitter<PlayerTypeApi>();
  playersFilterd:PlayerTypeApi[] = [];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters']?.currentValue){
      this.filters = changes['filters']?.currentValue;
    }
    if (changes['players']?.currentValue){
      this.players = changes['players']?.currentValue;
    }
    if (this.filters.length > 0 && this.players.length >0){
      this.playersFilterd = this.players?.filter(player=>player.position.some(position => this.filters?.includes(position))) || [...this.players]  
     }else  if (this.players?.length >0){
      this.playersFilterd = [...this.players]
     }
  }

  removeFilter(value:any){
    this.filter.emit(value);
  }

  changePlayer(player:PlayerTypeApi){
    this.player.emit(player);
  }

}
