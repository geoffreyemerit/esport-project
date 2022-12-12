import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { AbstractApi } from './abstractapi.service';

@Injectable({
  providedIn: 'root',
})
export class TeamService extends AbstractApi<Team> {
  base_service = 'teams/';
}
