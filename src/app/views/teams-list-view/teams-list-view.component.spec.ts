import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListViewComponent } from './teams-list-view.component';

describe('TeamsListViewComponent', () => {
  let component: TeamsListViewComponent;
  let fixture: ComponentFixture<TeamsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
