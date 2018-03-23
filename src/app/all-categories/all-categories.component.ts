import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  CatArr = [
    {name: "clothing", values: ["T-shirts", "skirts", "any other Thing"]},
    {name: "bagsandshoes", values: ["bags", "shoes"]},
    {name: "technology", values: ["Mobiles", "Tablets", "iPads"]}
  ];
  SubCat = {
    clothing: ["T-shirts", "skirts", "any other Thing"],
    bagsandshoes: ["bags", "shoes"],
    technology: ["Mobiles", "Tablets", "iPads"]
  };

  constructor() { }

  ngOnInit() {
    
  }

}
