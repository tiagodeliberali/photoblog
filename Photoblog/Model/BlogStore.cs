using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Photoblog.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Photoblog.Model
{
    public class BlogStore : IBlogStore
    {
        public const string AllPostsCacheKey = "AllPosts";
        public const string AllCategoriesCacheKey = "AllCategories";

        private BlogDbContext context;
        private IMemoryCache memoryCache;

        public BlogStore(IMemoryCache memoryCache, BlogDbContext context)
        {
            this.memoryCache = memoryCache;
            this.context = context;
        }

        /*CATEGORIES*/
        public List<Category> GetAllCategories(bool hideFutureDates = true)
        {
            List<Category> allCategories;

            if (!memoryCache.TryGetValue(AllCategoriesCacheKey, out allCategories))
            {
                allCategories = context
                    .Categories
                    .Include(x => x.Posts)
                        .ThenInclude(x => x.Images)
                    .OrderBy(x => x.Name)
                    .ToList();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromDays(365));

                // Save data in cache.
                memoryCache.Set(AllCategoriesCacheKey, allCategories, cacheEntryOptions);
            }

            if (hideFutureDates)
            {
                foreach (var category in allCategories)
                {
                    category.Posts = RemoveFuturePosts(category.Posts);
                }
            }

            return allCategories;
        }

        public Category GetCategory(int id, bool hideFutureDates = true)
        {
            var allCategories = GetAllCategories(hideFutureDates);

            return allCategories.FirstOrDefault(x => x.Id == id);
        }


        /*CATEGORIES*/
        public List<Post> GetAllPosts(bool hideFutureDates = true)
        {
            List<Post> allPosts;

            if (!memoryCache.TryGetValue(AllPostsCacheKey, out allPosts))
            {
                allPosts = context
                    .Posts
                    .Include(x => x.Category)
                    .Include(x => x.Images)
                    .OrderByDescending(x => x.Date)
                    .ToList();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromDays(365));

                // Save data in cache.
                memoryCache.Set(AllPostsCacheKey, allPosts, cacheEntryOptions);
            }

            if (hideFutureDates)
            {
                allPosts = RemoveFuturePosts(allPosts);
            }

            return allPosts;
        }

        public Post GetPost(int id, bool hideFutureDates = true)
        {
            var allPosts = GetAllPosts(hideFutureDates);

            return allPosts.FirstOrDefault(x => x.Id == id);
        }

        public Post GetPostByLink(string link, bool hideFutureDates = true)
        {
            var allPosts = GetAllPosts(hideFutureDates);

            return allPosts.FirstOrDefault(x => x.Link == link);
        }

        /*IMAGES*/
        public List<Image> GetImagesByPostId(int postId, bool hideFutureDates = true)
        {
            var images = GetPost(postId, hideFutureDates).Images;

            return images == null ? null : images.ToList();
        }

        public Image GetImage(int id)
        {
            return context.Images.FirstOrDefault(x => x.Id == id);
        }

        /*GENERAL*/
        public void Create<TEntity>(TEntity entity)
            where TEntity : class
        {
            context.Add(entity);

            context.SaveChanges();

            ClearCache();
        }

        public void Update<TEntity>(TEntity entity)
            where TEntity : class
        {
            context.Update(entity);

            context.SaveChanges();

            ClearCache();
        }

        public void Delete<TEntity>(TEntity entity)
            where TEntity : class
        {
            context.Remove(entity);

            context.SaveChanges();

            ClearCache();
        }


        /*TOOLS*/
        private List<Post> RemoveFuturePosts(ICollection<Post> posts)
        {
            return posts.Where(x => x.Date <= DateTime.Today).ToList();
        }

        public string Serialize(object obj)
        {
            var settings = new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                Formatting = Formatting.Indented,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            return JsonConvert.SerializeObject(obj, settings);
        }

        private void ClearCache()
        {
            memoryCache.Remove(AllCategoriesCacheKey);
            memoryCache.Remove(AllPostsCacheKey);
        }
    }
}
