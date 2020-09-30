using System;
using System.Collections;
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
    public class PlayerController : ControllerBase
    {
        private readonly GameContext context;
        public PlayerController(GameContext c)
        {
            context = c;
        }

        [HttpGet]
        public IEnumerable<Player> Get()
        {
            return context.Player.Include(a => a.favoriteGame).OrderBy(c => c.Name);
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
                key = "Games Played",
                value = context.Participant.Where(o => o.Player == p).Count(),
                unit = "" }
            );

            statlist.Add(new Stat()
            {
                key = "Wins",
                value = context.Participant.Where(o => o.Player == p  && o.Winner).Count(),
                unit = ""
            });
            return statlist;
        }

    }
}
