import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PlayerDisplayType, PlayerTypeApi, StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnChanges {
  constructor(private state:StateService) {}
  position:Record<number,string> = {1:'Point Guard',2:'Shooting Guard',3:'Forward',4:'Power Forward',5:'Center'};
  // players$ = this.state.playerS$.asObservable();
  // filters$ = this.state.positionFilterS$.asObservable();
  
  @Input() filters:number[] = [];
  @Input() players:PlayerTypeApi[] = [];
  @Output() filter = new EventEmitter<number>();
  @Output() player = new EventEmitter<PlayerTypeApi>();

  // newStream:Observable<newStreamType> = combineLatest(this.players$, this.filters$).pipe(
  //  map( ([players, filters]) => {
  //   let List;
  //   if (filters?.length != 0){
  //     List = players?.filter(player=>player.position.some(position => filters?.includes(position)))
  //   }
  //   const object = {
  //     players:List|| players ||null,
  //     filters:filters||null}
  //   return object as newStreamType
  // })
  // );
  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters']?.currentValue?.length){
      this.players?.filter(player=>player.position.some(position => this.filters?.includes(position)))
    }
  }

  removeFilter(value:any){
    this.filter.emit(value.id);
  }

  changePlayer(player:PlayerTypeApi){
    this.player.emit(player);
  }

}
