import { Game, IGame } from "./game";

export class UpcommingMatch implements IUpcommingMatch {
  id: number;
  game: Game;
  date: Date;

  public Game() {
  }
}

export interface IUpcommingMatch {
  id: number;
  game: IGame;
  date: Date;
}
