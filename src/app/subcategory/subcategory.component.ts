import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
  subCat
  subCatId;
  constructor( private subcategoryService: SubcategoryService, private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
    this.subCatId = params.get('id');
    console.log(this.subCatId)
  }) 
}
  ngOnInit() {
    //send to api to get all products of a certain subcategory... should be array of objects
    //subcat id to be sent to server
    ;
    
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

    this.subcategoryService.getSubCatProducts(this.subCatId).subscribe((res)=>{
        console.log(res);
        this.subCat=res;
    })
  }

}
