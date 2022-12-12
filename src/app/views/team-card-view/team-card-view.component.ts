import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-card-view',
  templateUrl: './team-card-view.component.html',
  styleUrls: ['./team-card-view.component.css'],
})
export class TeamCardViewComponent implements OnInit {
  @Input() team: Team;

  constructor() {
    this.team = new Team(0, '');
  }

  ngOnInit(): void {}
}
