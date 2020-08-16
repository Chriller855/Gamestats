import { Component } from '@angular/core';
import { PlayerService } from './PlayerService';
import {Player} from '../models/player'


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})

export class PlayerComponent {
  public players: Player[];
  public name: string;
  private playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;

    this.playerService.get().subscribe((data: any[]) => {
      this.players = data;
    })
  }

  public addPlayer() {
    var p1 = new Player()
    p1.name = this.name;
    var me = this;
    this.playerService.put(p1).subscribe(
      (val) => {
        this.players.push(<Player>val)
        console.log("POST call successful value returned in body",
          val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

    this.name = null
  }

}
