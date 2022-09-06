import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlayerDisplayType } from 'src/app/services/state.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {

  constructor() { }
  @Input() player:PlayerDisplayType = {} as PlayerDisplayType;

  ngOnChanges(changes: SimpleChanges) {
    // this.statPosition = changes['player']?.currentValue?.stats?.length;
    // this.max = changes['player']?.currentValue?.stats?.length || 0;
  }

}
