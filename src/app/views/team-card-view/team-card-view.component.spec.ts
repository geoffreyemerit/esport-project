import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardViewComponent } from './team-card-view.component';

describe('TeamCardViewComponent', () => {
  let component: TeamCardViewComponent;
  let fixture: ComponentFixture<TeamCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
