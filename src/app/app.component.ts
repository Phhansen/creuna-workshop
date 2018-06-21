import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
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
