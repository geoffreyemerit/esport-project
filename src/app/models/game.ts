import { GameStyle } from './game-style';

export class Game {
  name: string;

  img?: string;
  bannerimg?: string;

  year?: number;
  pegi?: number;

  styles?: GameStyle[];

  constructor(rName: string) {
    this.name = rName;
  }
}
