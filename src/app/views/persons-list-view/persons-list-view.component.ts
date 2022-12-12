import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-persons-list-view',
  templateUrl: './persons-list-view.component.html',
  styleUrls: ['./persons-list-view.component.css'],
})
export class PersonsListViewComponent implements OnInit {
  @Input() persons?: Person[];
  @Input() link?: string;

  ngOnInit(): void {}
}
