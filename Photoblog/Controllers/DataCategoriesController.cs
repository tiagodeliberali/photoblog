using System;
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
    public class DataCategoriesController : Controller
    {
        private const string AllCategoriesCacheKey = "AllCategories";
        private const string PostsByCategoryIDCacheKey = "PostsByCategoryID";

        private BlogDbContext dbContext;
        private IMemoryCache memoryCache;

        public DataCategoriesController(IMemoryCache memoryCache, BlogDbContext dbContext)
        {
            this.memoryCache = memoryCache;
            this.dbContext = dbContext;
        }

        [HttpGet]
        public string Get()
        {
            string result;

            if (!memoryCache.TryGetValue(AllCategoriesCacheKey, out result))
            {
                var categories = dbContext
                    .Categories
                    //.Include(x => x.Posts)
                    .OrderBy(x => x.Name)
                    .ToList();

                result = Serialize(categories);

                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromDays(3));

                // Save data in cache.
                memoryCache.Set(AllCategoriesCacheKey, result, cacheEntryOptions);
            }

            return result;
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            string cacheKey = string.Format("{0}:{1}", PostsByCategoryIDCacheKey, id);

            string result;

            if (!memoryCache.TryGetValue(cacheKey, out result))
            {
                var category = dbContext
                    .Categories
                    .Include(x => x.Posts)
                        .ThenInclude(x => x.Images)
                    .FirstOrDefault(x => x.Id == id);

                result = Serialize(category);

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