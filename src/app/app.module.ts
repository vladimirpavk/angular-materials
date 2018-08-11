import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialsModule } from './materials.module';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { FetchService } from './fetch.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent
  ],
  entryComponents: [
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
