import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  filesUrl = [];

  constructor() {}

  ngOnInit(): void {}

  onImageChange(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = reader.result;
        this.filesUrl.push(url);
      };
      reader.readAsDataURL(file);
    }
  }
  onRemove(index: number): void {
    this.filesUrl.splice(index, 1);
  }
}
