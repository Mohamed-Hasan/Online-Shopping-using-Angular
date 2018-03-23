import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = true;
  logged = false;
  toggleClass() {
    this.show==false?this.show=true:this.show=false;
  }

}
