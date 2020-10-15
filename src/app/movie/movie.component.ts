import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
  
})
export class MovieComponent implements OnInit {
  moviesDB: any[] = [];
  actorsDB:any[]=[];

  section = 5; 

  title: string = "";
  year: number = 0;
  movieId: string = "";
  
  constructor(private dbService: DatabaseService) { }
// This lifecycle callback function will be invoked with the component get initialized by Angular./////////
  ngOnInit() {
    this.onGetMovies();
  }
  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
  //Create a new Movie, POST request
  onSaveMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.createMovie(obj).subscribe(result => {
      this.onGetMovies();
    });
  }

  ///////////////////////////////////////// ADD ACTOR TO MOVIES
  // onaddActors(item) {
  //   this.title = item.title;
  //   this.year = item.year;
  //   this.movieId = item._id;
  // }
  // addActors() { //do these names need to match up with those in routers?
  //   let obj = { title: this.title, year: this.year, actors: this.year }; //FIX//
  //   this.dbService.updateMovie(this.movieId, obj).subscribe(result => {
  //     this.onGetMovies();
  //   });
  // }

 actorId="";
selectActor(actorId){
this.actorId=actorId._id
};
selectMovie(movieId){
this.movieId=movieId._id;
};

 addActors() { 
    let data = { id:this.actorId }; 
   
    this.dbService.addActorsToMovie(this.movieId,data).subscribe(result => {
      this.onGetMovies();
      this.onGetActors();

    });
   }



  //Delete Movie/////////////////////
  onDeleteMovie(item) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMovies();
    });
  }
  
  changeSection(sectionId) {
    this.section = sectionId;
    this.resetValues();
  }

  resetValues() {
    this.title = "";
    this.year = 0;
    this.movieId = "";
  }
  
 startYear=0;
 endYear=0;
//Delete Movies produced before aYear///////////////////////////////CHECK

  deleteMoviesYear(item){
    // this.moviesDB=this.moviesDB.filter(item=>item.year>=startYear && item.year<=endYear);
    this.dbService.deleteMoviesYear(item._id).subscribe(result => {
      this.onGetMovies();
    });
  }

}
