import { Component, OnInit } from '@angular/core';
import { CoworkingSpace } from '../../models/coworking-space.model';
import { CoworkingSpaceService } from '../../services/coworking-space.service';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-spacelist',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './spacelist.component.html',
  styleUrls: ['./spacelist.component.css']
})
export class SpacelistComponent implements OnInit {
  spaces: CoworkingSpace[] = [];

  constructor(private coworkingSpaceService: CoworkingSpaceService, private router: Router) { }

  ngOnInit(): void {
    this.loadSpaces();
  }

  loadSpaces(): void {
    this.coworkingSpaceService.getAllSpaces().subscribe(data => {
      this.spaces = data;
    });
  }

  deleteSpace(id: number): void {
    this.coworkingSpaceService.deleteSpace(id).subscribe(() => {
      this.spaces = this.spaces.filter(space => space.id !== id);
    });
  }

  updateSpace(id: number): void {
    this.router.navigate(['/editspace', id]);
  }
}
