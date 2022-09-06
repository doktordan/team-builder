import { Component, OnInit } from '@angular/core';
import { PlayerDisplayType, PlayerTypeApi, StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.scss']
})
export class TopContainerComponent implements OnInit {

  constructor(private state:StateService) {}
  players:PlayerTypeApi[]|null = null;
  player:PlayerDisplayType = {} as PlayerDisplayType;
  modal:PlayerDisplayType = {} as PlayerDisplayType;
  currentStat:number = 0;
  filters:number[] = [];
  position:Record<number,string> = {1:'Point Guard',2:'Shooting Guard',3:'Forward',4:'Power Forward',5:'Center'}

  ngOnInit(): void {
    // HTTP REQUEST IT DOESNT NEED UNSUB
    this.state.getPlayers().subscribe((data)=>
    {
      this.players = data
      this.player = {
        ...data[0],
        position:
        data[0]?.position?.map(
          (position:number)=>
            {return {id:position,description:this.position[position]}
          })
      }
    }
    );
  }

  changeStat($event:number):void{
    this.currentStat= $event
  }

  changePlayer(player:PlayerTypeApi):void{
    this.player = {
      ...player,
      position:
      player?.position?.map(
        (position:number)=>
          {return {id:position,description:this.position[position]}
        })
    }
  }

  changeModal(player:PlayerTypeApi):void{
    this.modal = {
      ...player,
      position:
      player?.position?.map(
        (position:number)=>
          {return {id:position,description:this.position[position]}
        })
    }
  }

  applyFilter($event:number):void{
    if (!this.filters.includes($event)){
      this.filters = [...this.filters,$event];
    }else{
      this.filters = this.filters.filter(filter => filter != $event);
    }
   
  }

}
