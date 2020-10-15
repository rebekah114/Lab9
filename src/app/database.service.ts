import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;
  getMovies() {
    return this.http.get("/movies");
  }
  getMovie(id: string) {
    let url = "/movies/" + id;
    return this.http.get(url);
  }
  createMovie(data) {
    return this.http.post("/movies", data, httpOptions);
  }
  
  deleteMovie(id) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  onDeleteMoviesYear(id) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }
  addActorsToMovie(movieId, actorId, data) {
    let url = "/movies/" + movieId + "/actors/" + actorId;
    return this.http.post(url,data, httpOptions);
  }
}
// updateMovie(id, data) {
//     let url = "/movies/" + id;
//     return this.http.put(url, data, httpOptions);
//   }

