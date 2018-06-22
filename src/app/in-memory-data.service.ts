import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from "./models";

export class InMemPlayerService implements InMemoryDbService {
  createDb() {
    let players: Player[] = [
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
    return {players};
  }
}