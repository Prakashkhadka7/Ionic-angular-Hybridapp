import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspirationDetailPage } from './inspiration-detail.page';

describe('InspirationDetailPage', () => {
  let component: InspirationDetailPage;
  let fixture: ComponentFixture<InspirationDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InspirationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
