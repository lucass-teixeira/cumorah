import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkTimePage } from './work-time.page';

describe('WorkTimePage', () => {
  let component: WorkTimePage;
  let fixture: ComponentFixture<WorkTimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
