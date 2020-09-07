using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Gamestats.Models
{
    public class PlayerWithStats : Player
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public string WinRate { get; set; }
    }

    public class Player : IPlayer
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public string firstname { get; set; }
        public string lastname { get; set; }

        [Column(name: "favoriteGameId")]
        [ForeignKey("favoriteGameId")]
        public Game favoriteGame { get; set; }
        public string favoriteGameStyle { get; set; }
        public string steamName { get; set; }
    }

    public interface IPlayer
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
