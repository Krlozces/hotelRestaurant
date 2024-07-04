import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SearchBarComponent, ListRoomsComponent],
  template: `
    <app-header></app-header>
    <app-search-bar></app-search-bar>
    <app-list-rooms></app-list-rooms>
    <app-footer></app-footer>
  `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-restaurant';
}
