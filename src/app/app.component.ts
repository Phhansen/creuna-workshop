import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "";

  players = [
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
