import { Component, Input } from "@angular/core";
import { Player } from "../models";

@Component({
  selector: "player-count",
  templateUrl: "./player-count.component.html"
})
export class PlayerCountComponent {
  @Input() items: Player[];

  prosCount(): number {
    if (!this.items) return;
    return this.items.filter((player: Player) => player.pro).length;
  }
}
