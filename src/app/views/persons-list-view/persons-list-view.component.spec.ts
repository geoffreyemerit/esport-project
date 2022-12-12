import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsListViewComponent } from './persons-list-view.component';

describe('PersonsListViewComponent', () => {
  let component: PersonsListViewComponent;
  let fixture: ComponentFixture<PersonsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
