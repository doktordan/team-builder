import { Component, OnInit } from '@angular/core';
import { combineLatest,map,tap,Observable } from 'rxjs';
import { PlayerTypeApi, StateService } from 'src/app/services/state.service';


type newStreamType ={
  players: PlayerTypeApi[]|null;
  filters:number[] | null;
}
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  constructor(private state:StateService) {}
  position:Record<number,string> = {1:'Point Guard',2:'Shooting Guard',3:'Forward',4:'Power Forward',5:'Center'};
  players$ = this.state.playerS$.asObservable();
  filters$ = this.state.positionFilterS$.asObservable();

  newStream:Observable<newStreamType> = combineLatest(this.players$, this.filters$).pipe(
   map( ([players, filters]) => {
    let List;
    if (filters?.length != 0){
      List = players?.filter(player=>player.position.some(position => filters?.includes(position)))
    }
    const object = {
      players:List|| players ||null,
      filters:filters||null}
    return object as newStreamType
  })
  );
  ngOnInit(): void {
  }

  removeFilter(value:number){
    this.state.setFilterPosition(value);
  }

  changePlayer(player:PlayerTypeApi){
    this.state.preparePlayer(player);
  }

  changeModal(player:PlayerTypeApi){
    console.log(player);
    this.state.changeModal(player);
  }

}
