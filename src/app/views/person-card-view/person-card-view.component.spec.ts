import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardViewComponent } from './person-card-view.component';

describe('PersonCardViewComponent', () => {
  let component: PersonCardViewComponent;
  let fixture: ComponentFixture<PersonCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCardViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
