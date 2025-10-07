import { Component } from '@angular/core';
import { CoworkingSpace } from '../../models/coworking-space.model';
import { CoworkingSpaceService } from '../../services/coworking-space.service';
import { Router, RouterModule } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-addspace',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule,  ReactiveFormsModule ],
  templateUrl: './addspace.component.html',
  styleUrls: ['./addspace.component.css']
})
export class AddspaceComponent {
  spaceForm: FormGroup;
  successMsg = '';
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private spaceService: CoworkingSpaceService,
    private authService: AuthService,
    private router: Router
  ) {
    this.spaceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      description: [''],
      image: ['']
    });
  }

  onSubmit() {
    if (this.spaceForm.invalid) return;

    const user = this.authService.getUser();
    if (!user) {
      console.error("⚠️ Aucun utilisateur connecté !");
      return;
    }

    const newSpace = {
      ...this.spaceForm.value,
      adminId: user.id
    };

    this.spaceService.addSpace(newSpace).subscribe({
      next: (res) => {
        console.log("Space ajouté ✅ :", res);
        this.router.navigate(['/spacelist']);
      },
      error: (err) => {
        console.error("Erreur ajout espace ❌:", err);
      }
    });
  }}
