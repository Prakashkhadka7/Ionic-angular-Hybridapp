import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Inspiration } from '../interfaces/inspiration.interface';
import { InspirationService } from '../services/inspiration.service';

@Component({
  selector: 'app-inspiration-list',
  templateUrl: './inspiration-list.page.html',
  styleUrls: ['./inspiration-list.page.scss'],
})
export class InspirationListPage implements OnInit {
  @ViewChild('popover') popover: any;
  userImage: any;
  inspirations: Array<any> = [];

  constructor(
    private inspirationService: InspirationService,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.loadInspirations();
    if (sessionStorage['userDetails']) {
      this.userImage = JSON.parse(sessionStorage['userDetails']).imageUrl;
    }
  }

  isOpen = false;

  // open pop up for logout
  presentPopover(e: Event) {
    this.inspirationService.presentPopover(e);
  }

  createInspiration() {
    this.router.navigate(['/inspiration-details/' + '0']);
  }

  viewInspirationDetails(inspiration: Inspiration) {
    this.router.navigate(['/inspiration-details', inspiration.id]);
  }

  loadInspirations() {
    let inspirationsList = this.inspirationService.getInspirations();
    if (inspirationsList) {
      this.inspirations = JSON.parse(inspirationsList);
    }
  }

  deleteInspiration(inspiration) {
    this.inspirationService.deleteInspiration(inspiration.id);
  }
}
