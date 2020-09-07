using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gamestats.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gamestats.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoundController : ControllerBase
    {
        private readonly GameContext context;
        public RoundController(GameContext c)
        {
            context = c;
        }

        // GET: api/<RoundController>
        [HttpGet]
        public IEnumerable<Round> Get()
        {

            //var b = context.Participant.
            //    Include(a => a.Player).
            //    Include(a => a.Round).ThenInclude(round => round.Game).ToList();

            var a = context.Round.
                Include(a => a.Game).Include(a => a.Participants);

            return a;

        }

        // POST api/<RoundController>
        [HttpPost]
        public void Post([FromBody] Round value)
        {

            value.RoundNumber = context.Round.Count(o => o.Game.Id == value.Game.Id) + 1;
            value.Game = context.Game.Find(value.Game.Id);
            // Needs Validation and autoIncrement will take care of ID
            value.Participants.ToList().ForEach(p =>
            {
               p.Player = context.Player.Find(p.Player.Id);
            });
            context.Round.Add(value);
            context.SaveChanges();
        }

        [HttpGet("{id}")]
        public Round Get(int id)
        {
            return context.Round.Find(id);
        }
    }
}
