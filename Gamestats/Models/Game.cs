using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gamestats.Models
{
    public class Game
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
