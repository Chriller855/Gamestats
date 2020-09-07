import { Component } from '@angular/core';
import { PlayerService } from './PlayerService';
import {Player} from '../models/player'
import { Round } from '../models/round';
import { Game } from '../models/game';
import { GameService } from '../game/gameService';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})

export class PlayerComponent {
  public players: Player[];
  public games: Game[];
  public name: string;
  public playerModel: Player = new Player();
  private playerService: PlayerService;
  displayedColumns: string[] = ['id', 'name'];
  opened: boolean = false;
  editMode: boolean = false;

  gameStyles: string[] = ["FPS", "MOBA", "Platforming", "Adventure"];

  gamesPlayed = [
    { name: "oneNight", winner: false },
    { name: "oneNight", winner: true },
    { name: "oneNight", winner: false }
  ]

  displayedColumnsGamesPlayed: string[] = ['name', "winner"];

  constructor(playerService: PlayerService , gameService: GameService) {
    this.playerService = playerService;

    this.playerService.get().subscribe((data: any[]) => {
      this.players = data;
    });

    gameService.get().subscribe((data: any[]) => {
      this.games = data;
    });
  }

  close() {
    this.opened = false;
    this.editMode = false;
  }

  public addPlayer() {
    var p1 = new Player()
    p1.name = this.name;
    var me = this;
    this.playerService.post(p1).subscribe(
      (val) => {
        this.players.push(<Player>val);
        console.log("POST call successful value returned in body", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

    this.name = null
  }

  public createNewPlayer() {
    this.playerModel = new Player();
    this.editMode = true;
    this.opened = true;
  }

  public savePlayer() {
    if (this.playerModel.id > -1) {
      var p1 = this.playerModel;
      this.playerService.put(p1).subscribe(
        (val) => {
          this.players.push(<Player>val);
          console.log("put call successful value returned in body", val);
        },
        response => {
          console.log("put call in error", response);
        },
        () => {
          console.log("The put observable is now completed.");
        });
    } else {
      var p1 = this.playerModel;
      this.playerService.post(p1).subscribe(
        (val) => {
          this.players.push(<Player>val);
          console.log("POST call successful value returned in body", val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    }
    this.editMode = false
    this.opened = false
  }

  public getRecord(row) {
    this.playerModel = row;
    this.editMode = false
    this.opened = true
  }

  compareObjects(o1: any, o2: any): boolean {
        

    return o1 && o2 && o1.name === o2.name && o1.id === o2.id;
  }

}
