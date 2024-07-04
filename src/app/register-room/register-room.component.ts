import { Component } from '@angular/core';
import { Room } from './../room'; 
@Component({
  selector: 'app-register-room',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3></h3>
      <form>
        <div>
          <label for="name"></label>
          <input type="text" name="name" id="name" [(ngModel)]="room.name" />
        </div>
        <div>
          <label for="description"></label>
          <input type="text" name="description" id="description" [(ngModel)]="room.description" />
        </div>
        <div>
          <label for="name"></label>
          <input type="checkbox" name="name" id="name" [(ngModel)]="room.name" />
        </div>
        <div>
          <label for="name"></label>
          <input type="checkbox" name="name" id="name" [(ngModel)]="room.name" />
        </div>
        <div>
          <label for="name"></label>
          <input type="checkbox" name="name" id="name" [(ngModel)]="room.name" />
        </div>
      </form>
    </div>
  `,
  styleUrl: './register-room.component.scss'
})
export class RegisterRoomComponent {
  room : Room = new Room();
}
