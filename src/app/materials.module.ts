import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule, matTooltipAnimations} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports:[
        MatButtonModule, 
        MatBadgeModule, 
        MatInputModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatTableModule
        
    ],
    exports: [
        MatButtonModule, 
        MatBadgeModule, 
        MatInputModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatTableModule
    ]
})
export class MaterialsModule {}