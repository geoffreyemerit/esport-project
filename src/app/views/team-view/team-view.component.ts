import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css'],
})
export class TeamViewComponent implements OnInit {
  idTeam?: number;
  team?: Team;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
    this.route.params.subscribe((params) => {
      this.idTeam = parseInt(params['id']);
    });
  }

  ngOnInit(): void {
    /** Récupère la team selectionnée en définissant que idTeam n'est pas undifined*/
    this.idTeam !== undefined &&
      this.teamService.getById(this.idTeam).subscribe((data) => {
        let teamSelected: Team = data;
        this.team = teamSelected;
      });
  }
}
