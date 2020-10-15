import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { DatabaseService } from "./database.service";
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule
  ], 
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://stackoverflow.com/questions/52676474/bootstrap-not-working-properly-in-angular-6