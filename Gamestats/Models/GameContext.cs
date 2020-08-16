using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Gamestats.Models
{
    public class GameContext : DbContext
    {
        public DbSet<Game> Game { get; set; }
        public DbSet<Player> Player { get; set; }

        public DbSet<Round> Round { get; set; }

        public DbSet<Participant> Participant { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=gamestat.db");
    }
}
