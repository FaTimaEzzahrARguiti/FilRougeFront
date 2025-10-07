import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { CoworkingSpace } from '../../models/coworking-space.model';
import { CoworkingSpaceService } from '../../services/coworking-space.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roomcard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './roomcard.component.html',
  styleUrls: ['./roomcard.component.css']
})
export class RoomcardComponent implements OnInit {
  rooms: Room[] = [];
  coworkingSpace: CoworkingSpace | null = null;

  constructor(
    private roomService: RoomService,
    private coworkingSpaceService: CoworkingSpaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const spaceId = params.get('id');
      if (spaceId) {
        // Fetch Coworking Space details
        this.coworkingSpaceService.getSpaceById(+spaceId).subscribe({
          next: (spaceData) => {
            this.coworkingSpace = spaceData;
          },
          error: (err) => {
            console.error('Failed to load coworking space details:', err);
            alert('Failed to load coworking space details. Please check the console.');
          }
        });

        // Fetch Rooms for the Coworking Space
        this.roomService.getRoomsByCoworkingSpaceId(+spaceId).subscribe({
          next: (roomData) => {
            this.rooms = roomData;
          },
          error: (err) => {
            console.error('Failed to load rooms:', err);
            alert('Failed to load rooms for this space. Please check the console.');
          }
        });
      }
    });
  }
}

