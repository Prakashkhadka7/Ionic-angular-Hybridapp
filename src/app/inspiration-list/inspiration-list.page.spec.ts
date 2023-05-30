import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InspirationListPage } from './inspiration-list.page';

describe('InspirationListPage', () => {
  let component: InspirationListPage;
  let fixture: ComponentFixture<InspirationListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InspirationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
