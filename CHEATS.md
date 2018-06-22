## My-component

*my-component.component.ts*

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html'
})
export class MyComponentComponent {
  title: string = "Hello, frontenders";
  isHappy: boolean = true;
  numberOne: number = 45;
  numberTwo: number = 1;

  logo: string = "assets/logo.svg";
  name: string = "Poul";

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
      this.name = event.target.value;
  }

  handleClick() {
      this.name = "Holger";
  }
}
```

*my-component.component.html*

```html
<h2 [innerHTML]="title"></h2>
<h2>{{ title + '!' }}</h2>
<p>{{ numberOne + numberTwo }}</p>
<p>{{ isHappy ? ":)" : ":(" }}</p>
<div class="showcase-section">
    <img [src]="logo">
</div>
<div class="showcase-section">
  <button (click)="handleClick()">Change name</button>
  <input type="text" [value]="name" (input)="handleInput($event)" (blur)="handleBlur($event)" />
</div>
<p>{{ name }}</p>
```
