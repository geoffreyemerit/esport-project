import { Game } from './game';
import { Player } from './player';
import { Staff } from './staff';

export class Team {
  id: number;
  team: string;

  game?: Game;

  logo?: string;
  maxplayers?: number;

  players?: Player[];
  staff?: Staff[];

  constructor(rId: number, rTeam: string) {
    this.id = rId;
    this.team = rTeam;
  }
}
