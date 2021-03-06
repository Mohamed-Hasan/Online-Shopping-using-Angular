import { Component, OnInit } from '@angular/core';
import { SalesService } from "./sales.service";
import { LoginService } from "../login.service"
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  orders;
  seller={id:1};  //should be set during seller login as a global variable
  currentPage=1;
  pages;
  userData;
  constructor(private salesService: SalesService, private login_service:LoginService, private router: Router) { 
    this.login_service.currentuser.subscribe(user=>{
      this.userData=JSON.parse(JSON.stringify(user));
      console.log("const",this.userData.isseller)
    })
    if (this.userData.isseller) {
      this.getMySales();      
    } else {
      this.router.navigate(['login'])
    }
   }

  ngOnInit() {
    
  }

  paginate(e){
    let prevPage = this.currentPage
    switch (e.target.value) {
      case 0:
      this.orders.length < 2
      this.currentPage<this.pages?this.currentPage +=1 : this.currentPage;
        break;
      case -1:
        this.currentPage>1?this.currentPage -=1 : this.currentPage;
      break;
      default:
        this.currentPage = e.target.value;
    }
    console.log(this.currentPage)
    if (prevPage != this.currentPage) {
      this.getMySales();
    }
    
  }

  getMySales(){
    var token = localStorage.getItem('token');
    this.salesService.getMySales(token,this.currentPage).subscribe(res => {
      this.orders = res.products;
      console.log(this.orders)
      this.pages = res.pages;
    });
  }
}