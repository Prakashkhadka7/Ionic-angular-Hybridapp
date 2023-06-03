import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profilepopover',
  templateUrl: './profilepopover.component.html',
  styleUrls: ['./profilepopover.component.css'],
})
export class ProfilepopoverComponent implements OnInit {
  constructor(
    public popController: PopoverController,
    public authService: AuthService
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  dismissPopover() {
    this.popController.dismiss();
  }
}
