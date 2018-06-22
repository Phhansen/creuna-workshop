## My-component

*my-component.component.ts*
```typescript
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
```

*my-component.component.html*
```html
<player-count class="player-count" [items]="players"></player-count>
<player-detail 
    class="player-detail" 
    *ngFor="let player of players;" 
    [detail]="player"
    (levelUp)="levelUpPlayer($event)"></player-detail>
```

## Player counter

*player-count.component.ts*

```typescript
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
```
*player-count.component.html*

```html
<h2>CS:GO players</h2>
<div>
    Total number of pros: {{ prosCount() }} / {{ items.length }}
</div>
```

## Player details

*player-detail.component.ts*

```typescript
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
```

*player-detail.component.html*

```html
<div class="player-label">
  <p>{{ detail.name }}</p>
  <span>{{ detail.matchesPlayed }} Matches played</span>
</div>
<div class="player-status" *ngIf="detail.pro">
  pro
</div>
<button class="button-small" (click)="levelUpPlayer()">+</button>
```
