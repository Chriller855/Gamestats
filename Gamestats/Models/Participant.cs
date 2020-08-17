using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Gamestats.Models
{
    public class Participant
    {
        [ForeignKey("round_id")]
        [Column(name: "round_id")]
        public int RoundId { get; set; }

        public Round Round { get; set; }

        [ForeignKey("player_id")]
        [Column(name: "player_id")]
        public Player Player { get; set; }

        [Key]
        [Column(name: "participant_id")]
        public int ParticipantId { get; set; }

        public bool Winner { get; set; }
    }
}
