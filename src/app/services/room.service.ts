import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8091/api/room';

  constructor(private http: HttpClient) { }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  updateRoom(id: number, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/${id}`, room);
  }

  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/${id}`);
  }

  getRoomsByCoworkingSpaceId(spaceId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/space/${spaceId}`);
  }
}
