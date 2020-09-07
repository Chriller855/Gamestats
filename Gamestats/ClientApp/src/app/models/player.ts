
export class Player implements IPlayer {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  address: string;

  favoriteGame: number;
  favoriteGameStyle: string;

  steamName: string;


  public player(name: string) {
    this.name = name;
  }
}

export interface IPlayer {
  id: number;
  name: string;
}
