import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  // La siguiente url obtiene el listado de todas las habitaciones desde el backend
  private baseURL = "http://localhost:8080/api/v1/rooms";

  constructor(private httpClient: HttpClient) { }

  getListOfRooms():Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL}`);
  }

  registerRoom(room: Room):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, room);
  }

  getRoomById(id: number): Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL}/${id}`);
  }

  deteleRoom(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
