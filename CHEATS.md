## My-component

*my-component.component.ts*

```typescript
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

```
## Player service ( new file )
place this file under the app folder as: `app/player.service.ts`

*player.service.ts* 

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of as observableOf } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { Player } from "./models";

@Injectable({ providedIn: "root" })
export class PlayerService {
    private apiUrl: string = "api/players";

    constructor(private httpClient: HttpClient) {}

    getPlayers(): Observable<Player[]> {
        return this.httpClient.get<Player[]>(this.apiUrl).pipe(
            tap(players => console.log("result from API", players)),
            catchError(error => observableOf([]))
        );
    }
}
```
