import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentorDetailPage } from './mentor-detail.page';

describe('MentorDetailPage', () => {
  let component: MentorDetailPage;
  let fixture: ComponentFixture<MentorDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MentorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
