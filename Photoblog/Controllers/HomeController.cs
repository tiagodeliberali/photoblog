using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Photoblog.Model;
using Photoblog.Model.ViewModels;

namespace Photoblog.Controllers
{
    public class HomeController : Controller
    {
        private BlogDbContext _context;

        public HomeController(BlogDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public string Verify()
        {
            return "loaderio-daaad4db55552c1550097bf56baba9ce";
        }

        public IActionResult Metadata(string link)
        {
            var metaData = new MetadataInformation();

            var post = _context.Posts.Include(x => x.Images).FirstOrDefault(x => x.Link == link);

            if (post != null)
            {
                metaData.Title = post.Title;
                metaData.Description = post.Description;
                metaData.Link = post.Link;
                metaData.ImageUrl = post.Images.Count > 0 ? post.Images.First().Url : string.Empty;
            }
            
            return View(metaData);
        }
    }
}
