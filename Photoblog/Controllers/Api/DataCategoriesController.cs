using Microsoft.AspNetCore.Mvc;
using Photoblog.Model;

namespace Photoblog.Controllers
{
    [Route("api/[controller]")]
    public class DataCategoriesController : Controller
    {
        private IBlogStore blogStore;

        public DataCategoriesController(IBlogStore blogStore)
        {
            this.blogStore = blogStore;
        }

        [HttpGet]
        public string Get()
        {
            return blogStore.Serialize(blogStore.GetAllCategories());
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return blogStore.Serialize(blogStore.GetCategory(id));
        }
    }
}