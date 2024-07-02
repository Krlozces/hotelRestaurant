import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="" alt="" />
      <h2 class="listing-heading"></h2>
      <p class="listing-location"></p>
      <a>Ver más</a>
    </section>
  `,
  styleUrl: './rooms-location.component.scss'
})
export class RoomsLocationComponent {

}
