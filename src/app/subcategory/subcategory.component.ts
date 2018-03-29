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
  currentPage=1;
  pages;
  constructor( private subcategoryService: SubcategoryService, private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
    this.subCatId = params.get('id');
    this.subcatName = params.get('subcat');
    console.log(this.subCatId)
    }) 
  }
  ngOnInit() {
    //send to api to get all products of a certain subcategory... should be array of objects
    //subcat id to be sent to server
    console.log("in my init")
    this.getProducts();
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
      this.getProducts();
    }
    
  }

  getProducts(){
    this.subcategoryService.getSubCatProducts(this.subCatId,this.currentPage).subscribe(res=>{
      console.log("in subsc",res);
      this.subCat=res.products;
      this.pages = res.pages;
      // console.log(this.subCat.length)
    })
  }
}