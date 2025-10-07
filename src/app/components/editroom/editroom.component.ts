import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Room, RoomType } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editroom',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.css']
})
export class EditroomComponent implements OnInit {
  room: Room = {
    name: '',
    type: RoomType.OPEN_SPACE, // Default value
    description: '',
    capacity: '',
    image: '',
    price: 0,
    coworkingSpaceId: 0,
    isAvailable: true
  };
  roomTypes = Object.values(RoomType);

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.roomService.getRoomById(+id).subscribe({
          next: (data) => {
            this.room = data;
          },
          error: (err) => {
            console.error('Failed to load room:', err);
            alert('Failed to load room details. Please check the console.');
          }
        });
      }
    });
  }

  updateRoom(): void {
    if (this.room.id) {
      this.roomService.updateRoom(this.room.id, this.room).subscribe({
        next: () => {
          alert('Room updated successfully!');
          this.router.navigate(['/space', this.room.coworkingSpaceId, 'rooms']);
        },
        error: (err) => {
          console.error('Failed to update room:', err);
          alert('Failed to update room. Please check the console.');
        }
      });
    } else {
      alert('Room ID is missing. Cannot update room.');
    }
  }
}
