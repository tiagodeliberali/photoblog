using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Photoblog.Model.ViewModels;
using Photoblog.Model;
using Microsoft.EntityFrameworkCore;

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
