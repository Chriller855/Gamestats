import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GameService } from '../game/gameService';
import { GenericService } from '../game/genericService';
import { Game } from '../models/game'
import { Player } from '../models/player'
import { Round } from '../models/round'
import { Participant } from '../models/participant';
import { PlayerService } from '../player/PlayerService';


@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent {

  public games: Game[];
  public players: Player[];
  public round: Round;

  private gameService: GameService;
  private playerService: PlayerService;
  private genericService: GenericService;
  private myControl: FormControl;

  displayedColumns: string[] = ['name', 'winner', 'loser'];

  constructor(gameService: GameService, playerService: PlayerService, genericService: GenericService) {
    this.gameService = gameService;
    this.playerService = playerService;
    this.genericService = genericService;
    this.myControl = new FormControl()


    this.round = new Round();

    this.gameService.get().subscribe((data: any[]) => {
      this.games = data;
    });

    this.playerService.get().subscribe((data: any[]) => {
      this.players = data;
    });
  }

  public displayFn(game: Game) {
    if (game) {
      return game.name
    }
    return '';
  }

  public selectedclient(event) {
    console.log(event)
    if (event.option.value) {
      console.log(event.option.value);
      this.round.game = event.option.value;
    }
  }

  public addWinner(player: Player, winner :boolean) {

    var currentPaticipant = this.round.participants.find(p => p.player.id === player.id);
    if (currentPaticipant) {
      currentPaticipant.winner = winner
    } else {
      var p = new Participant();
      p.player = player;
      p.winner = winner;
      this.round.participants.push(p);
    }

    // disable Player until new round
  }

  public addRound() {
    this.genericService.put('round', this.round).subscribe((data: any[]) => {
      this.round = new Round();
    });
    console.log(this.round);
  }

  public showRound() {
    console.log(this.round);
  }

}
