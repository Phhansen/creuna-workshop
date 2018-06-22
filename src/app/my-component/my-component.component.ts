import { Component, OnInit } from '@angular/core';
import { Player } from "../models";

import { PlayerService } from "../player.service";

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html'
})
export class MyComponentComponent implements OnInit {
  name: string = "";

  players: Player[] = [];

  constructor(private service: PlayerService) {}

  ngOnInit() {
    this.service.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  handleChange(value: string) {
    this.name = value;
  }

  levelUpPlayer(event: Player) {
    this.players = this.players.map((player: Player) => {
      if (player.id === event.id) {
        player = {
          ...player,
          pro: true
        }
      }
      return player;
    });

  }
}
