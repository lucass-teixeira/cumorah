import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyDetailPage } from './study-detail.page';

describe('StudyDetailPage', () => {
  let component: StudyDetailPage;
  let fixture: ComponentFixture<StudyDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
