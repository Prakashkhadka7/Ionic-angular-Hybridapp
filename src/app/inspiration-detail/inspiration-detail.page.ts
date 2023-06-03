import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Inspiration } from '../interfaces/inspiration.interface';
import { InspirationService } from '../services/inspiration.service';

@Component({
  selector: 'app-inspiration-detail',
  templateUrl: './inspiration-detail.page.html',
  styleUrls: ['./inspiration-detail.page.scss'],
})
export class InspirationDetailPage implements OnInit {
  inspiration!: Inspiration;
  userImage: any;

  inspirationForm: FormGroup;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inspirationService: InspirationService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.inspirationForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
    });
    const inspirationId = this.route.snapshot.params['id'];
    if (inspirationId !== '0') {
      this.inspiration =
        this.inspirationService.getInspirationDetails(inspirationId);
      this.populateFormWithInspiration();
      this.isEditing = true;
    }
  }

  presentPopover(e: Event) {
    this.inspirationService.presentPopover(e);
  }

  ionViewWillEnter() {
    if (sessionStorage['userDetails']) {
      this.userImage = JSON.parse(sessionStorage['userDetails']).imageUrl;
    }
    // const inspirationId = this.route.snapshot.paramMap.get('id');
    // inspirationId ? this.loadInspiration(inspirationId) : '';
  }

  // loadInspiration(id: any) {
  //   this.inspiration = this.inspirationService.getInspirationDetails(id);
  // }

  editInspiration() {
    this.router.navigate(['/inspiration-edit', this.inspiration.id]);
  }

  deleteInspiration() {
    this.inspirationService.deleteInspiration(this.inspiration.id);
    this.router.navigate(['/inspiration-list']);
  }

  populateFormWithInspiration(): void {
    this.inspirationForm.patchValue({
      title: this.inspiration.title,
      description: this.inspiration.description,
      image: this.inspiration.image,
    });
  }

  saveInspiration(): void {
    if (this.inspirationForm.invalid) {
      return;
    }

    const formValues = this.inspirationForm.value;

    if (this.isEditing) {
      this.inspiration.title = formValues.title;
      this.inspiration.description = formValues.description;
      this.inspiration.image = formValues.image;
      this.inspirationService.updateInspiration(
        this.inspiration.id,
        this.inspiration
      );
    } else {
      const newInspiration: Inspiration = {
        id: Math.random(), // Generate a unique ID (you may use your own logic)
        title: formValues.title,
        description: formValues.description,
        image: formValues.image,
      };
      this.inspirationService.createInspiration(newInspiration);
    }

    this.router.navigate(['/inspiration-list']);
  }
  cancelEditing(): void {
    this.router.navigate(['/inspiration-list']);
  }
}
