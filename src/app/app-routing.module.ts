import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamViewComponent } from './views/team-view/team-view.component';
import { TeamsViewComponent } from './views/teams-view/teams-view.component';
import { PersonViewComponent } from './views/person-view/person-view.component';

const routes: Routes = [
  { path: '', component: TeamsViewComponent },
  { path: `team/:id`, component: TeamViewComponent },
  { path: `team/:id/players/:id`, component: PersonViewComponent },
  { path: `team/:id/staff/:id`, component: PersonViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
