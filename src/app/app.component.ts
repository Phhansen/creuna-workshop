import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "frontenders";
  isHappy: boolean = true;
  numberOne: number = 45;
  numberTwo: number = 1;
}
