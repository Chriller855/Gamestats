﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gamestats.Models
{
    public class Round
    {
        [Column(name: "round_number")]
        public int RoundNumber { get; set; }

        [Key]
        [Column(name: "round_id")]
        public int RoundId { get; set; }

        public ICollection<Participant> Participants { get; set; }

        [Column(name: "game_id")]
        [ForeignKey("game_id")]
        //public int GameId { get; set; }
        public Game Game { get; set; }

    }
}
