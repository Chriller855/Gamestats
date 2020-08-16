
import { Participant } from './participant';
import { Game } from './game';

export class Round implements IRound {
  roundNumber: number;
  roundId: number;
  //gameId: number;
  game: Game;
  participants: Participant[]

  public constructor() {
    this.participants = [];
  }
}

export interface IRound {
  roundNumber: number;
  roundId: number;
}
