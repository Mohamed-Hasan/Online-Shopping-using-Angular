import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  movieArr=["Moon Light","The Pursuit of Happiness", "The Saw"]

  constructor(private http: Http) { }

  get(){
    // console.log(this.http.get(`http://localhost:9090/`).map(res=> res.json()));
    return this.http.get(`http://localhost:5000/`)
    // return this.movieArr;
    // console.log(this.movieArr)
  }

  getMovie(title: string){
    return this.http.get(`http://www.omdbapi.com/?apikey=b869bbda&t=${title}`)
      .map(res=> res.json())
      // console.log(res)
  }
}