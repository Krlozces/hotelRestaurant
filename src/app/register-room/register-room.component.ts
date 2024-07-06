import { Component } from '@angular/core';
import { Room } from './../room'; 
import { RoomService } from '../room.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-room',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <h3></h3>
      <form (ngSubmit) = "onSubmit()">
        <div>
          <label for="name">Nombre: </label>
          <input type="text" name="name" id="name" [(ngModel)]="room.name" />
        </div>
        <div>
          <label for="description">Descripción: </label>
          <input type="text" name="description" id="description" [(ngModel)]="room.description" />
        </div>
        <div>
          <label for="isBooked"></label>
          <input type="checkbox" name="isBooked" id="isBooked" [(ngModel)]="room.isBooked" />
        </div>
        <div>
          <label for="capacidad">Capacidad: </label>
          <input type="number" name="capacidad" id="capacidad" [(ngModel)]="room.capacidad" />
        </div>
        <div>
          <label for="tarifa">Tarifa: </label>
          <input type="number" name="tarifa" id="tarifa" [(ngModel)]="room.tarifa" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  `,
  styleUrl: './register-room.component.scss'
})
export class RegisterRoomComponent {
  room : Room = new Room();

  constructor (private roomService: RoomService, private router: Router) { }

  registerRoom(){
    this.roomService.registerRoom(this.room).subscribe(data => {
      console.log(data);
      this.goToRooms();
    }, error => console.log(error))
  }

  goToRooms(){
    this.router.navigate(['/rooms']);
  }

  onSubmit(){
    this.registerRoom();
  }
}
