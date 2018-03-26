import { Component, OnInit } from '@angular/core';
import { AddProductService } from "./add-product.service";
import { AllCategoriesService } from "../all-categories/all-categories.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  added = false;
  product = {
    name: null,
    price: 0,
    amountAvailable: 1,
    description: null,
    image: null,
    category:null,
    subcategory:null,
  };
  CatArr;
  subcatArr;
  constructor(private AddProductService: AddProductService, private AllCategoriesService: AllCategoriesService) { }

  ngOnInit() {
    this.getcategoriesList();
  }

  // API --> get all categories and subcategories
  getcategoriesList() {
    this.AllCategoriesService.getAllCategories().subscribe(res => {
      console.log(res);
      this.CatArr = res;
    })
  }


  submit() {
    console.log(this.product);
    this.AddProductService.addProduct(this.product).subscribe(res => console.log(res));
    console.log("hi")
    this.added = true;
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.product.image = btoa(binaryString);
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(event.file);
  }

  onRemoved(event) {
    this.product.image = null;
  }

  onChange(event){
    console.log(event.target.value)
    // this.AddProductService.getSubCategories(event.target.value).subscribe(res=>{
      // console.log(res)
      // this.subcatArr = res.subcategoryId;
      this.CatArr.forEach(cat => {
        if (cat._id == event.target.value) {
          this.subcatArr = cat.subcategoryId;
        }
      });
    // })
  }
}
