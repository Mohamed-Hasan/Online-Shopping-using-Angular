import { Component, OnInit, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() showMovie;

  constructor() {
  }

  ngOnInit() {

  }

}