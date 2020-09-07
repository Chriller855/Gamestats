using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gamestats.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gamestats.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly GameContext context;
        public PlayerController(GameContext c)
        {
            context = c;
        }

        [HttpGet]
        public IEnumerable<IPlayer> Get()
        {
            return context.Player.Where(b => b.Id > 0);
        }

        // GET api/<GameController>/5
        [HttpGet("{id}")]
        public IPlayer Get(int id)
        {
            return context.Player.Find(id);
        }

        // POST api/<GameController>
        [HttpPost]
        public Player Post([FromBody] Player value)
        {
            // Needs Validation and autoIncrement will take care of ID
            context.Player.Add(value);
            context.SaveChanges();
            return value;
        }

        // PUT api/<GameController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Player value)
        {
            context.Update(value);
            context.SaveChanges();
        }

        // DELETE api/<GameController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            context.Player.Remove(context.Player.Find(id));
            context.SaveChanges();
        }

        [HttpGet("{id}/stats")]
        public List<Stat> GetStatsForPlayer(int id)
        {
            Player p = context.Player.Find(id);

            List<Stat> statlist = new List<Stat>();

            statlist.Add (new Stat() {
                key = "GamesPlayed",
                value = context.Participant.Where(o => o.Player == p).Count(),
                unit = "" }
            );
            return statlist;
        }

    }
}
