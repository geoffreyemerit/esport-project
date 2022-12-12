import { Component, Input, OnInit } from '@angular/core';
import { GameStyle } from 'src/app/models/game-style';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-teams-list-view',
  templateUrl: './teams-list-view.component.html',
  styleUrls: ['./teams-list-view.component.css'],
})
export class TeamsListViewComponent implements OnInit {
  @Input() teams?: Team[];
  @Input() stylesList?: GameStyle[];

  ngOnInit(): void {}
}
