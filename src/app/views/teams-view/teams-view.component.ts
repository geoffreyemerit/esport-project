import { Component, OnInit } from '@angular/core';
import { GameStyle } from 'src/app/models/game-style';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.css'],
})
export class TeamsViewComponent implements OnInit {
  teams: Team[] | undefined;
  styles: GameStyle[] | undefined;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    //Recupere la liste d'articles
    this.teamService.getAll().subscribe((data) => {
      let teamsList: Team[] = [];
      //On fait en sorte de mettre ca proprement dans un 'vrai' tableau
      //car firebase nous renvoie un objet et non un tableau
      //et ngFor a besoin d'un tableau donc voila...
      for (const key in data) {
        teamsList.push(data[key]);
      }
      this.teams = teamsList;
    });
  }
}
