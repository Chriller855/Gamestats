import { Component } from '@angular/core';
import { GameService } from '../game/gameService';
import { GenericService } from '../game/genericService';
import { Game } from '../models/game'
import { Player } from '../models/player'
import { Round } from '../models/round'
import { Participant } from '../models/participant';
import { PlayerService } from '../player/PlayerService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public games: Game[];
  public players: Player[];
  public round: Round;

  private gameService: GameService;
  private playerService: PlayerService;
  private genericService: GenericService;

  constructor(gameService: GameService, playerService: PlayerService, genericService: GenericService) {
    this.gameService = gameService;
    this.playerService = playerService;
    this.genericService = genericService;

    this.round = new Round();

    this.gameService.get().subscribe((data: any[]) => {
      this.games = data;
    });

    this.playerService.get().subscribe((data: any[]) => {
      this.players = data;
    });
  }

  public onGameSelect(game: Game) {
    this.round.game = game;
  }

  public addWinner(player: Player) {
    var p = new Participant();
    p.player = player;
    p.winner = true;
    this.round.participants.push(p);
    // disable Player until new round
  }

  public addLoser(player: Player) {
    var p = new Participant();
    p.player = player;
    p.winner = false;
    this.round.participants.push(p);

    //disable Player until new round
  }

  public addRound() {
    this.genericService.put('round', this.round).subscribe((data: any[]) => {
      this.round = new Round();
    });
    console.log(this.round);
  }


}
