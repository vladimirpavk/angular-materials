import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

export interface DialogData{
  ime:string,
  prezime:string
}
export class TableData{
  constructor(
    public name:string,
    public lastname:string
  ){}
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-materials';
  tableElements:TableData[] = [];

  constructor(
    private snackBar:MatSnackBar,
    private dialog:MatDialog
  ){}

  ngOnInit(){
    this.tableElements=[
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković'),
      new TableData('Pavle', 'Pavković')
    ]
  }

  openSnackBar() {
    let snackBarhandler=this.snackBar.open("Moja poruka",  "Moja akcija", {
      duration: 2000,
    });
    snackBarhandler.onAction().subscribe(()=>{
      console.log("On snackbar action triggered...");
    });

    //this.snackBar.openFromComponent(DialogExampleComponent);
  }

  openDialog():void{    

    const dialogRef = this.dialog.open(
      DialogExampleComponent,
      {
        data:{
          ime:'Pavle',
          prezime:'Pavković'
        }
      }     
    );

    dialogRef.afterClosed().subscribe((result)=>{
      console.log(result);
    })
  }
}
