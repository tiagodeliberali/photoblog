using Photoblog.Model.Entities;
using System.Collections.Generic;

namespace Photoblog.Model
{
    public interface IBlogStore
    {
        List<Post> GetAllPosts(bool hideFutureDates = true);
        Post GetPost(int id, bool hideFutureDates = true);
        Post GetPostByLink(string link, bool hideFutureDates = true);

        List<Category> GetAllCategories(bool hideFutureDates = true);
        Category GetCategory(int id, bool hideFutureDates = true);

        List<Image> GetImagesByPostId(int postId, bool hideFutureDates = true);
        Image GetImage(int id);

        string Serialize(object obj);

        void Create<TEntity>(TEntity entity) where TEntity : class;
        void Update<TEntity>(TEntity entity) where TEntity : class;
        void Delete<TEntity>(TEntity entity) where TEntity : class;
    }
}
