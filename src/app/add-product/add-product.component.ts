import { Component, OnInit } from '@angular/core';
import { AddProductService } from "./add-product.service";
import { AllCategoriesService } from "../all-categories/all-categories.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  submitted = false;
  editable= false;
  prodId;
  product = {
    name: null,
    price: 0,
    amountAvailable: 1,
    description: null,
    image: null,
    category:null,
    subcategory:null,
    sellerId:"5ab95e2bda28ff74357c2f03",
  };
  CatArr;
  subcatArr;
  constructor(private AddProductService: AddProductService, private AllCategoriesService: AllCategoriesService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.prodId = params.get('id') ;
      if (this.prodId) {
        this.editable = true;
        this.AddProductService.getProduct(this.prodId).subscribe(res=>{
          this.product = {
            name: res.name,
            price: res.price,
            amountAvailable: res.amountAvailable,
            description: res.description,
            image: res.image,
            category:null,
            subcategory:null,
            sellerId:"5ab95e2bda28ff74357c2f03",
          }
        })
      }
    })
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
    var token = localStorage.getItem('token')
    if(this.editable){
      console.log("update");
      this.AddProductService.editProduct(token,this.prodId, this.product).subscribe(res => console.log(res));
      this.submitted = true;
    }
    else{
      console.log("submit")
      console.log(this.product)
      this.AddProductService.addProduct(token,this.product).subscribe(res => console.log(res));
      this.submitted = true;
    }
    console.log(this.product);
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
    this.product.category=event.target.value;
    // this.AddProductService.getSubCategories(event.target.value).subscribe(res=>{
      // console.log(res)
      // this.subcatArr = res.subcategoryId;
      this.CatArr.forEach(cat => {
        console.log(cat.subcategoryId)
        if (cat._id == event.target.value) {
          this.subcatArr = cat.subcategoryId;
        }
      });
  }

  onChangesub(event){
    this.product.subcategory=event.target.value;
  }
}
