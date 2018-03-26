import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CatArr;
  show = true;
  logged = false;
  toggleClass() {
    this.show==false?this.show=true:this.show=false;
  }

  constructor(private AppService : AppService) { }

  getAllCategories(){
    this.AppService.getAllCategories().subscribe(res =>{
      console.log(res);
      this.CatArr = res;
    })
  }

}
