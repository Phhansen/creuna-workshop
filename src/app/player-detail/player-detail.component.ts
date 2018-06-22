import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Player } from "../models";

@Component({
  selector: "player-detail",
  templateUrl: "./player-detail.component.html"
})
export class PlayerDetailComponent {
  @Input() detail: Player;

  @Output() levelUp = new EventEmitter();

  levelUpPlayer() {
    this.levelUp.emit(this.detail);
  }
}
