﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Photoblog.Model;
using Photoblog.Model.Entities;

namespace Photoblog.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private BlogDbContext dbContext;

        public DataController(BlogDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public string Get()
        {
            var posts = dbContext
                .Posts
                .Include(x => x.Category)
                .Include(x => x.Images)
                .OrderByDescending(x => x.Date)
                .ToList();

            var serialized = Serialize(posts);

            return serialized;
        }

        public static string Serialize(object obj, Formatting formating = Formatting.Indented)
        {
            var settings = new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                Formatting = formating,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            return JsonConvert.SerializeObject(obj, settings);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
