import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string | null = null;
  isAdminUser: boolean = false;
  isClientUser: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.userUpdated$.subscribe(() => {
      this.updateLoginStatus();
    });
    this.updateLoginStatus();
  }

  updateLoginStatus(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    const user = this.authService.getUser();
    this.userName = user ? user.name : null;
    this.isAdminUser = this.authService.isAdmin();
    this.isClientUser = this.authService.isClient();
  }

  logout(): void {
    this.authService.removeAuthData();
    this.router.navigate(['/home']);
  }
}
