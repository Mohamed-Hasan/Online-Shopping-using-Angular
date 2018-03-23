import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output() addMovie = new EventEmitter();
  newMovie;
  movieName;
  movieRate;
  movieDirector;
  movieWriter;
  movieActors;
  movieImage;

  constructor() {
    
  }

  sendMovie(){
    this.newMovie = {
      movieName: this.movieName,
      movieRate: this.movieRate,
      movieDirector: this.movieDirector,
      movieWriter: this.movieWriter,
      movieActors: this.movieActors,
      movieImage: this.movieImage     
    }
    this.addMovie.emit(this.newMovie);

  }

  ngOnInit() {
  }

}
