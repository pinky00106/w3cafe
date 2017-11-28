import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = 'eat';

  selectMenu(menu: string): void {
    this.menu = menu;
  }
}
