import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.scss']
})
export class TopContainerComponent implements OnInit {

  constructor(private state:StateService) { 
    state.getPlayers().subscribe(((data)=>this.state.setPlayers(data)));
  }

  ngOnInit(): void {
  }

}
