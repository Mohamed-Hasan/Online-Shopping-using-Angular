import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'David';
  newMovie;
  movie;
  movieArr;

  constructor(private MovService: MoviesService) {
    this.MovService.get()
      .subscribe((res)=>{
        this.movieArr = JSON.parse(res._body);
        console.log(this.movieArr);
      });
  }

  // movieArr = [ 
  //   {movieImage: "moonlight.jpg", movieName: "Moon Light", movieRate: 8, movieDirector: "Barry Jenkins", movieWriter: "Tarell Alvin McCraney", movieActors: "Mahershala Ali, Shariff Earp,Duan Sanderson"},
  //   {movieImage: "happy.jpg", movieName: "The Purcuit of Happyness", movieRate: 9, movieDirector: "Gabriele Muccino", movieWriter: "Tarell Alvin McCraney", movieActors: "Wll Smith, Jaden Smith, Thandie Newton"},
  //   {movieImage: "saw4.jpg", movieName: "The Saw", movieRate: 7.5, movieDirector: "James Wan", movieWriter: "Steven Conrad", movieActors: "Leigh Whannell, Cary Elwes, Danny Glover "}
  // ]

  // currentMovie = {
  //   movieImage: this.movieArr[0].movieImage,
  //   movieName: this.movieArr[0].movieName,
  //   movieRate: this.movieArr[0].movieRate,
  //   movieDirector: this.movieArr[0].movieDirector,
  //   movieWriter: this.movieArr[0].movieWriter,
  //   movieActors: this.movieArr[0].movieActors,
  // }

  movieIndex(m){
    this.movie = m.replace(" ", "+");
    this.MovService.getMovie(this.movie)
      .subscribe((res)=>{
        this.currentMovie = res;
      })
  }

  // push(e){
  //   this.newMovie = e
  //   this.movieArr.push(this.newMovie);
  //   console.log(this.movieArr);
  // }

  ngOnInit() {
    // this.movieArr = this.MovService.movieArr;

  }
}