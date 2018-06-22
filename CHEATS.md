## My-component

*my-component.component.ts*

```typescript
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
```

*my-component.component.html*

```html
<div class="showcase-section">
  <button>change name</button>
  <div>
    <input type="text" [value]="name" (input)="handleChange($event.target.value)" />

    <p *ngIf="name.length">Searching for... {{ name }}</p>

    <ng-template [ngIf]="name.length">
      <p>Searching for... {{ name }}</p>
    </ng-template>
  </div>
</div>

<div class="showcase-section">
  <ul class="demo-list">
    <li *ngFor="let player of players;">
      <div class="player-label">
        <p>{{ player.name }}</p>
        <span>{{ player.matchesPlayed }} Matches played</span>
      </div>
      <div class="player-status" *ngIf="player.pro">
        pro
      </div>
    </li>
    <ng-template ngFor let-player [ngForOf]="players">
      <li>
        <div class="player-label">
          <p>{{ player.name }}</p>
          <span>{{ player.matchesPlayed }} Matches played</span>
        </div>
        <div class="player-status" *ngIf="player.pro">
          pro
        </div>
      </li>
    </ng-template>
  </ul>
</div>
```
