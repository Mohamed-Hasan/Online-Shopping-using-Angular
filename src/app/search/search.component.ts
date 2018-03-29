import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  orders:object[];
  searchItem;
  searchResult;
  currentPage=1;
  pages;
  constructor( private SearchService: SearchService, private route: ActivatedRoute ) {
    this.route.paramMap.subscribe(params=>{
      this.searchItem = params.get('query')
      console.log(this.searchItem);
      this.getSearchResults()      
      
   })
  }

  ngOnInit() {
    //send to api to get all orders of a certain seller... should be array of objects
    //subcat name to be sent to server
  }
  getSearchResults(){
    this.SearchService.getSearchResults(this.searchItem,this.currentPage).subscribe(res=>{
      this.searchResult = res.products;
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
}