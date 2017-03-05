using Microsoft.AspNetCore.Mvc;
using Photoblog.Model;

namespace Photoblog.Controllers
{
    [Route("api/[controller]")]
    public class DataPostsController : Controller
    {
        private IBlogStore blogStore;

        public DataPostsController(IBlogStore blogStore)
        {
            this.blogStore = blogStore;
        }

        [HttpGet]
        public string Get()
        {
            return blogStore.Serialize(blogStore.GetAllPosts());
        }

        [HttpGet("{id}")]
        public string Get(string id)
        {
            return blogStore.Serialize(blogStore.GetPostByLink(id));
        }
    }
}
