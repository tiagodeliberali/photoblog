﻿using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Photoblog.Model;

namespace Photoblog.Controllers
{
    [Route("api/[controller]")]
    public class DataPostsController : Controller
    {
        private const string AllPostsCacheKey = "AllPosts";
        private const string PostsByIDCacheKey = "PostsByID";

        private BlogDbContext dbContext;
        private IMemoryCache memoryCache;

        public DataPostsController(IMemoryCache memoryCache, BlogDbContext dbContext)
        {
            this.memoryCache = memoryCache;
            this.dbContext = dbContext;
        }

        [HttpGet]
        public string Get()
        {
            string result;

            if (!memoryCache.TryGetValue(AllPostsCacheKey, out result))
            {
                var posts = dbContext
                    .Posts
                    .Include(x => x.Category)
                    .Include(x => x.Images)
                    .OrderByDescending(x => x.Date)
                    .ToList();

                result = Serialize(posts);

                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromDays(3));

                // Save data in cache.
                memoryCache.Set(AllPostsCacheKey, result, cacheEntryOptions);
            }

            return result;
        }

        [HttpGet("{id}")]
        public string Get(string id)
        {
            string cacheKey = string.Format("{0}:{1}", PostsByIDCacheKey, id);

            string result;

            if (!memoryCache.TryGetValue(cacheKey, out result))
            {
                var posts = dbContext
                    .Posts
                    .Include(x => x.Category)
                    .Include(x => x.Images)
                    .FirstOrDefault(x => x.Link == id);

                result = Serialize(posts);

                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromDays(3));

                // Save data in cache.
                memoryCache.Set(cacheKey, result, cacheEntryOptions);
            }

            return result;
        }

        private string Serialize(object obj, Formatting formating = Formatting.Indented)
        {
            var settings = new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                Formatting = formating,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            return JsonConvert.SerializeObject(obj, settings);
        }
    }
}