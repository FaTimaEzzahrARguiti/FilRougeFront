import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoworkingSpace } from '../models/coworking-space.model';

@Injectable({
  providedIn: 'root'
})
export class CoworkingSpaceService {
  private apiUrl = 'http://localhost:8091/api/space';

  constructor(private http: HttpClient) { }

  addSpace(space: CoworkingSpace): Observable<CoworkingSpace> {
    return this.http.post<CoworkingSpace>(this.apiUrl, space);
  }

  getAllSpaces(): Observable<CoworkingSpace[]> {
    return this.http.get<CoworkingSpace[]>(this.apiUrl);
  }

  updateSpace(id: number, space: CoworkingSpace): Observable<CoworkingSpace> {
    return this.http.put<CoworkingSpace>(`${this.apiUrl}/${id}`, space);
  }

  deleteSpace(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getSpaceById(id: number): Observable<CoworkingSpace> {
    return this.http.get<CoworkingSpace>(`${this.apiUrl}/${id}`);
  }
}
