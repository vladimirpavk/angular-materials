import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    imports:[
        MatButtonModule, 
        MatBadgeModule, 
        MatInputModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule, 
        MatBadgeModule, 
        MatInputModule,
        MatSnackBarModule
    ]
})
export class MaterialsModule {}