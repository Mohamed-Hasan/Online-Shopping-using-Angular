import { Component, OnInit } from '@angular/core';
import { ShelfService } from "./shelf.service";
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  seller;
  shelf:object[];
  currentPage=1;
  pages;
  userData;
  constructor( private ShelfService: ShelfService , private login_service:LoginService, private router: Router) { 
    this.login_service.currentuser.subscribe(user=>{
      this.userData=JSON.parse(JSON.stringify(user));
      console.log("const",this.userData.isseller)
    })
    if (this.userData.isseller != undefined) {
      this.getShelf();      
    } else {
      this.router.navigate(['login'])
    }
  }

  ngOnInit() {
    
  }

  getShelf(){
    this.ShelfService.getShelf(this.userData.id,this.currentPage).subscribe(res=>{console.log(res);this.shelf=res.products; this.pages=res.pages})
  }

  paginate(e){
    let prevPage = this.currentPage
    switch (e.target.value) {
      case 0:
      this.currentPage<this.pages?this.currentPage +=1 : this.currentPage;
        break;
      case -1:
        this.currentPage>1?this.currentPage -=1 : this.currentPage;
      break;
      default:
        break;
    }
    console.log(this.currentPage)
    if (prevPage != this.currentPage) {
      this.getShelf();
    }
    
  }

}