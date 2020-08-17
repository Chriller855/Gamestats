
export class Player implements IPlayer {
  id: number;
  name: string;

  public player(name: string) {
    this.name = name;
  }
}

export interface IPlayer {
  id: number;
  name: string;
}
