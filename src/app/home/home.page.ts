import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private authService: AuthService) {}

  loginWithFacebook() {
    // Implement Facebook login logic using the authService
  }

  async signInWithGoogle() {
    // GoogleAuth.init(); // or await GoogleAuth.init()
    const googleUser = await GoogleAuth.signIn();
    console.log('my user: ', googleUser);
  }
}
