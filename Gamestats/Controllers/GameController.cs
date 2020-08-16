using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Gamestats.Models;
using SQLitePCL;
using System.Dynamic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Gamestats.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private readonly GameContext context;
        public GameController(GameContext c)
        {
            context = c;
        }

        // GET: api/<GameController>
        [HttpGet]
        public IEnumerable<Game> Get()
        {
            return context.Game.Where( b => b.Id > 0);
        }

        // GET api/<GameController>/5
        [HttpGet("{id}")]
        public Game Get(int id)
        {
            return context.Game.Where(b => b.Id == id).FirstOrDefault();
        }

        // POST api/<GameController>
        [HttpPost]
        public Game Post([FromBody] Game value)
        {
            // Needs Validation and autoIncrement will take care of ID
            context.Game.Add(value);
            context.SaveChanges();
            return value;
        }

        // PUT api/<GameController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Game value)
        {
            Game g = context.Game.First(a => a.Id == id);
            g = value;
            context.SaveChanges();
        }

        // DELETE api/<GameController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Game g = new Game() { Id = id };
            context.Game.Attach(g);
            context.Game.Remove(g);
            context.SaveChanges();
        }
    }
}
