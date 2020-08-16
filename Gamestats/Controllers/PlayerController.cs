using System;
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

        // GET: api/<GameController>
        [HttpGet]
        public IEnumerable<Player> Get()
        {
            return context.Player.Where(b => b.Id > 0);
        }

        // GET api/<GameController>/5
        [HttpGet("{id}")]
        public Player Get(int id)
        {
            return context.Player.Where(b => b.Id == id).FirstOrDefault();
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
            Player g = context.Player.First(a => a.Id == id);
            g = value;
            context.SaveChanges();
        }

        // DELETE api/<GameController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            context.Player.Remove(Get(id));
            context.SaveChanges();
        }

    }
}
