import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; 
import { RoomsLocationComponent } from '../rooms-location/rooms-location.component';
import { Room } from './../room'
import { RoomService } from '../room.service';
@Component({
  selector: 'app-list-rooms',
  standalone: true,
  imports: [RoomsLocationComponent, NgFor],
  template: `
    <article *ngFor="let room of rooms">
      <app-rooms-location 
        [id]="room.id" 
        [name]="room.name" 
        [description]="room.description" 
        [isBooked]="room.isBooked"
        [capacidad]="room.capacidad" 
        [tarifa]="room.tarifa">
      </app-rooms-location>
    </article>
  `,
  styleUrl: './list-rooms.component.scss'
})
export class ListRoomsComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService: RoomService) { }

  ngOnInit(): void{
    this.getRooms();
  }

  private getRooms(){
    this.roomService.getListOfRooms().subscribe(data => {
      this.rooms = data;
    });
  }
  
}
