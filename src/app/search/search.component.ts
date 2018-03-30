import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SearchService } from './search.service'
import { AllCategoriesService } from "../all-categories/all-categories.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  orders:object[];
  searchResult;
  currentPage=1;
  pages;
  CatArr;
  subCatArr;
  category;
  filters={
    search:null,
    subcatIds:[],
    min:1,
    max:99999,
  }
  constructor( private SearchService: SearchService, private route: ActivatedRoute, private AllCategoriesService: AllCategoriesService ) {
    this.route.paramMap.subscribe(params=>{
      this.filters.search = params.get('query')
      console.log(this.filters.search);
      this.getSearchResults()      
      this.getcategoriesList();
   })
  }

  ngOnInit() {
    //send to api to get all orders of a certain seller... should be array of objects
    //subcat name to be sent to server
  }
  getSearchResults(){
    console.log(this.filters);
    this.SearchService.getSearchResults(this.filters,this.currentPage).subscribe(res=>{
      this.searchResult = res.result;
      this.pages = res.pages;
    })
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
      this.getSearchResults();
    }
    
  }

  getcategoriesList() {
    this.AllCategoriesService.getAllCategories().subscribe(res => {
      console.log(res);
      this.CatArr = res;
    })
  }

  onChange(event){
    console.log(event.target.value)
    this.category=event.target.value;
      this.CatArr.forEach(cat => {
        if (cat._id == event.target.value) {
          this.subCatArr = cat.subcategoryId;
          this.filters.subcatIds =[]
          console.log(this.subCatArr)
        }
      });
  }

  filterSubCat(e){
    let checked = e.target.checked;
    let subCatId = e.target.value;
    if (checked == true && this.filters.subcatIds.indexOf(subCatId) == -1) {
      this.filters.subcatIds.push(subCatId)
    }
    else if(checked == false && this.filters.subcatIds.indexOf(e.target.value) != -1){
      let subCatIndex = this.filters.subcatIds.indexOf(subCatId)
      this.filters.subcatIds.splice(subCatIndex,1)
    }
    this.getSearchResults()
    
    //send to api
  }

}