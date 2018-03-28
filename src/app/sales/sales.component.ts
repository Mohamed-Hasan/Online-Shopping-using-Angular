import { Component, OnInit } from '@angular/core';
import { SalesService } from "./sales.service";
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
  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.getMySales();
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
        this.currentPage = e.target.value;
    }
    console.log(this.currentPage)
    if (prevPage != this.currentPage) {
      this.getMySales();
    }
    
  }

  getMySales(){
    this.salesService.getMySales(this.seller.id,this.currentPage).subscribe(res => {
      this.orders = res.products;
      this.pages = res.pages;
    });
  }
}