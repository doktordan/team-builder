import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  constructor(private state:StateService) {}
  player = this.state.player$.asObservable();
  ngOnInit(): void {
  }

}
