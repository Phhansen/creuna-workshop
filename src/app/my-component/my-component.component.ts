import { Component } from '@angular/core';
import { Player } from "../models";

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html'
})
export class MyComponentComponent {
  name: string = "";

  players: Player[] = [
    {
        id: 1,
        name: "Stephen",
        matchesPlayed: 134,
        pro: true
    },
    {
        id: 2,
        name: "Roger",
        matchesPlayed: 23,
        pro: false
    },
    {
        id: 3,
        name: "Anthony",
        matchesPlayed: 159,
        pro: true
    },
    {
        id: 4,
        name: "Mark",
        matchesPlayed: 12,
        pro: false
    },
  ];

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
