import { Component } from '@angular/core';
import { GameService } from './gameService';
import { Game } from '../models/Game'


@Component({
  selector: 'app-player',
  templateUrl: './game.component.html'
})

export class GameComponent {
  public games: Game[];
  public name: string;
  private gameService: GameService;

  displayedColumns: string[] = ['id', 'name'];

  constructor(gameService: GameService) {
    this.gameService = gameService;

    this.gameService.get().subscribe((data: any[]) => {
      this.games = data;
    })
  }

  public addGame() {
    var p1 = new Game();
    p1.name = this.name;
    this.gameService.put(p1).subscribe(
      (val) => {
        this.games.push(<Game>val);
        this.name = null;
        console.log("POST call successful value returned in body", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

  public removeGame(game: Game) {
    this.gameService.delete(game).subscribe(
      (val) => {
        const index: number = this.games.indexOf(game);
        if (index !== -1) {
          this.games.splice(index, 1);
        }
        console.log("POST call successful value returned in body", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

}
