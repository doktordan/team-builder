import { Component, Input } from '@angular/core';
import { PlayerDisplayType } from 'src/app/services/state.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor() { }
  @Input() player:PlayerDisplayType = {} as PlayerDisplayType;
}
