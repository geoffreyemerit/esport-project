import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-card-view',
  templateUrl: './person-card-view.component.html',
  styleUrls: ['./person-card-view.component.css'],
})
export class PersonCardViewComponent implements OnInit {
  @Input() person: Person | undefined;
  @Input() link?: string;

  constructor() {}

  ngOnInit(): void {}
}
