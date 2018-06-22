import { Component } from '@angular/core';

interface Player {
  id: number;
  name: string;
  matchesPlayed: number;
  pro:  boolean;
}

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
}
