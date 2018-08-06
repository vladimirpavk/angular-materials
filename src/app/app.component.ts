import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-materials';
  constructor(private snackBar:MatSnackBar){}

  openSnackBar() {
    this.snackBar.open("Moja poruka",  "Moja akcija", {
      duration: 2000,
    });
  }
}
