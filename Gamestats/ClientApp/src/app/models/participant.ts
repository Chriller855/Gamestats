
import { Player } from './player';
import { Round } from './round';

export class Participant implements IParticipant {
  participantId: number;
  player: Player;
  round: Round;
  winner: boolean;

  public participant(player: Player) {
    this.player = player;
    this.winner = false;
  }
}

export interface IParticipant {
  player: Player;
  round: Round;
  winner: boolean;
}
