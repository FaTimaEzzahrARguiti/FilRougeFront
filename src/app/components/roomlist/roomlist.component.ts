import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-roomlist',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  rooms: Room[] = [];
  spaceId: number | null = null;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.spaceId = +id;
        this.loadRooms();
      }
    });
  }

  loadRooms(): void {
    if (this.spaceId) {
      this.roomService.getRoomsByCoworkingSpaceId(this.spaceId).subscribe({
        next: (data) => {
          this.rooms = data;
        },
        error: (err) => {
          console.error('Failed to load rooms:', err);
          alert('Failed to load rooms for this space. Please check the console.');
        }
      });
    }
  }

  deleteRoom(id: number): void {
    if (confirm('Are you sure you want to delete this room?')) {
      this.roomService.deleteRoom(id).subscribe({
        next: () => {
          alert('Room deleted successfully!');
          this.loadRooms();
        },
        error: (err) => {
          console.error('Failed to delete room:', err);
          alert('Failed to delete room. Please check the console.');
        }
      });
    }
  }

  addRoom(): void {
    this.router.navigate(['/space', this.spaceId, 'addroom']);
  }

  editRoom(roomId: number): void {
    this.router.navigate(['/room', roomId, 'edit']);
  }
}
