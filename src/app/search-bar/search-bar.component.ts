import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <label for="menu"></label>
        <input type="text" name="menu" id="menu" placeholder="Menu">
        <label for="rooms"></label>
        <input type="text" name="rooms" id="rooms" placeholder="Rooms">
        <label for=""></label>
        <input type="text" name="" id="" placeholder="Search...">
        <label for=""></label>
        <input type="text" name="" id="" placeholder="Search...">
        <button type="button">Buscar</button>
      </form>
    </section>
  `,
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

}
