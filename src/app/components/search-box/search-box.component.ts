import { Component, OnInit } from '@angular/core';
import { PlayerTypeApi, StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(private state:StateService) {}
  players = this.state.playerS$.asObservable();
  ngOnInit(): void {
  }

  changePlayer(player:PlayerTypeApi){
    this.state.preparePlayer(player);
  }

}
