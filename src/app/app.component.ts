import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FetchService, User } from './fetch.service';

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
  public title = 'angular-materials';
    
  public tableElements:TableData[] = [
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' },
    { name:'Pavle', lastname:'Pavković' }
  ];
  public tableDataSource=new MatTableDataSource<TableData>(this.tableElements);

  public columnsToDisplay:string[] = ['name', 'lastname'];

  constructor(
    private snackBar:MatSnackBar,
    private dialog:MatDialog,
    private service:FetchService
  ){}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){   
    this.tableDataSource.paginator = this.paginator;
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
    });    
  }

  private fetchUsers(){
      this.service.fetchUsers().subscribe((users:User[])=>{
        console.log(users);
      });
  }
}
