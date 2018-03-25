import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from './subcategory.service';
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  catName;
  subcatName;
  products;
  subCat /*= {
    
    subCatId:null,
    catName: null,
    subCatName: null,
    products:this.products,  [] prod{name/price/rating/image/available/desc}
  };*/

  constructor( private subcategoryService: SubcategoryService) { }

  ngOnInit() {
    //send to api to get all products of a certain subcategory... should be array of objects
    //subcat id to be sent to server
    let prod1 = {
      name: "iphone",
      price: 800,
      rating:3.5,
      image:null,
      available:5,
      desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre"
    }

    let prod2 = {
      name: "iphone s6",
      price: 1000,
      rating:4,
      image:null,
      available:5,
      desc:"afefwfregergegegregergergergergergergergergergrregregregergregergergergergergergergergergre"
    }
    
    this.products=[prod1,prod2];
    this.catName="electronics";
    this.subcatName="mobiles";

    this.subcategoryService.getSubCatProducts(this.subCat.subCatId).subscribe((res)=>{
        console.log(res);
        this.subCat=res;
    })
  }

}
