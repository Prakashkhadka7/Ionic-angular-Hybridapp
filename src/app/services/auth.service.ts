// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { BehaviorSubject } from 'rxjs';
import { InspirationService } from './inspiration.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  userSubject: BehaviorSubject<any>;

  constructor(
    private router: Router,
    private inspirationService: InspirationService
  ) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('userDetails'))
    );
    // this.user = this.userSubject.asObservable();
  }

  async loginWithGoogle() {
    try {
      let googleUser = await GoogleAuth.signIn();
      sessionStorage.setItem('userDetails', JSON.stringify(googleUser));
      this.userSubject.next(googleUser);

      console.log(googleUser);
      // Implement the Google authentication logic and set isLoggedIn to true upon successful login.
      if (googleUser.serverAuthCode) {
        this.isLoggedIn = true;
        sessionStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/inspiration-list']);
      }
    } catch (error: any) {
      this.inspirationService.presentAlert(
        '',
        '',
        'Error during Google sign-in:' + error
      );
    }
  }

  async logout() {
    await GoogleAuth.signOut();
    // Implement the logout logic and set isLoggedIn to false.
    this.isLoggedIn = false;
    sessionStorage.setItem('loggedIn', 'false');
    this.userSubject.next(null);
    // this.router.navigate(['login'], { replaceUrl: true });
    // this.ngZone.run(() =>
    this.router.navigate(['/home'], { replaceUrl: true });
    // );
  }

  public get userValue() {
    return this.userSubject.value;
  }
}
