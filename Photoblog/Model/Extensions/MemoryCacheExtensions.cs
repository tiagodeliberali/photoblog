using Microsoft.Extensions.Caching.Memory;

namespace Photoblog.Model.Extensions
{
    public static class MemoryCacheExtensions
    {
        public const string AllPostsCacheKey = "AllPosts";
        public const string PostsByIDCacheKey = "PostsByID";
        public const string AllCategoriesCacheKey = "AllCategories";
        public const string PostsByCategoryIDCacheKey = "PostsByCategoryID";

        public static void ClearAllPostsCache(this IMemoryCache cache, int categoryId)
        {
            cache.Remove(AllPostsCacheKey);

            cache.ClearCategoryCache(categoryId);
        }

        public static void ClearPostCache(this IMemoryCache cache, string link, int categoryId)
        {
            cache.ClearAllPostsCache(categoryId);

            cache.Remove(GetPostCacheKey(link));
        }

        public static string GetPostCacheKey(string link)
        {
            return string.Format("{0}:{1}", PostsByIDCacheKey, link);
        }

        public static void ClearAllCategoriesCache(this IMemoryCache cache)
        {
            cache.Remove(AllCategoriesCacheKey);
        }

        public static void ClearCategoryCache(this IMemoryCache cache, int id)
        {
            cache.ClearAllCategoriesCache();

            cache.Remove(GetCategoryCacheKey(id));
        }

        public static string GetCategoryCacheKey(int id)
        {
            return string.Format("{0}:{1}", PostsByCategoryIDCacheKey, id);
        }
    }
}
