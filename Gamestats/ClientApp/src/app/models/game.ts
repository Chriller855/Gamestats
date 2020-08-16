export class Game implements IGame {
  id: number;
  name: string;

  public Game(name: string) {
    this.name = name
  }
}

export interface IGame {
  id: number;
  name: string;
}
