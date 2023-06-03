import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userAccessToken!: string;
  userId!: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.userValue) {
      this.router.navigate(['/inspiration-list']);
    }
  }

  loginWithFacebook() {
    // Implement Facebook login logic using the authService
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
