import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepopoverComponent } from './profilepopover.component';

describe('ProfilepopoverComponent', () => {
  let component: ProfilepopoverComponent;
  let fixture: ComponentFixture<ProfilepopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilepopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
