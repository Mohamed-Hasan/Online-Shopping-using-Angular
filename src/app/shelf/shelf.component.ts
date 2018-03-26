import { Component, OnInit } from '@angular/core';
import { ShelfService } from "./shelf.service";

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  seller;
  shelf:object[];

  constructor( private ShelfService: ShelfService) { }

  ngOnInit() {
    //send to api to get all orders of a certain seller... should be array of objects
    //subcat name to be sent to server
    console.log("hi")
    this.getShelf();
  }

  getShelf(){
    this.ShelfService.getShelf("5ab95e2bda28ff74357c2f03").subscribe(res=>{console.log(res);this.shelf=res})
  }
}