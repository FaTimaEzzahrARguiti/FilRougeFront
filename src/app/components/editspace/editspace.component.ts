import { Component, OnInit } from '@angular/core';
import { CoworkingSpace } from '../../models/coworking-space.model';
import { CoworkingSpaceService } from '../../services/coworking-space.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editspace',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './editspace.component.html',
  styleUrls: ['./editspace.component.css']
})
export class EditspaceComponent implements OnInit {
  space: CoworkingSpace = { name: '', address: '', description: '', image: '', adminId: 0 };

  constructor(
    private coworkingSpaceService: CoworkingSpaceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.coworkingSpaceService.getSpaceById(+id).subscribe({
        next: (data) => {
          this.space = data;
        },
        error: (err) => {
          console.error('Failed to get space:', err);
          alert('Failed to load space details. Please check the console.');
        }
      });
    }
  }

  updateSpace(): void {
    this.coworkingSpaceService.updateSpace(this.space.id!, this.space).subscribe({
      next: () => {
        this.router.navigate(['/spacelist']);
      },
      error: (err) => {
        console.error('Failed to update space:', err);
        alert('Failed to update space. Please check the console.');
      }
    });
  }
}
