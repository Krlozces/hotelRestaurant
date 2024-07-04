import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rooms-location',
  standalone: true,
  imports: [],
  template: `
    <article class="listing">
      <!-- <img class="listing-photo" [src]="" alt="" /> -->
      <h2 class="listing-heading">{{ name }}</h2>
      <p class="listing-location"><span>Descripción: </span>{{ description }}</p>
      <p class="listing-location">{{ isBooked }}</p>
      <p class="listing-location"><span>Capacidad: </span>{{ capacidad }}</p>
      <p class="listing-location"><span>Tarifa: </span>{{ tarifa }}</p>
      <a href="#">Ver más</a>
    </article>
  `,
  styleUrl: './rooms-location.component.scss'
})
export class RoomsLocationComponent {
  @Input() name: string;
  @Input() description: string;
  @Input() isBooked: boolean;
  @Input() capacidad: number;
  @Input() tarifa: number;
}
