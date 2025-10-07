import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Room, RoomType } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addroom',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {
  room: Room = {
    name: '',
    type: RoomType.OPEN_SPACE,
    description: '',
    capacity: '',
    image: '',
    price: 0,
    coworkingSpaceId: 0,
    isAvailable: true
  };
  roomTypes = Object.values(RoomType);
  spaceId: number | null = null;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('spaceId');
      if (id) {
        this.spaceId = +id;
        this.room.coworkingSpaceId = this.spaceId;
      }
    });
  }

  addRoom(): void {
    if (this.spaceId) {
      this.roomService.addRoom(this.room).subscribe({
        next: () => {
          alert('Room added successfully!');
          this.router.navigate(['/space', this.spaceId, 'rooms']);
        },
        error: (err) => {
          console.error('Failed to add room:', err);
          alert('Failed to add room. Please check the console.');
        }
      });
    } else {
      alert('Coworking Space ID is missing. Cannot add room.');
    }
  }
}
