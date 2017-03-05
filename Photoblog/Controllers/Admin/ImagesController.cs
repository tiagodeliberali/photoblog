using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Photoblog.Controllers.Admin;
using Photoblog.Model;
using Photoblog.Model.Entities;

namespace Photoblog.Controllers
{
    [Authorize]
    public class ImagesController : AdminBaseController
    {
        public ImagesController(IBlogStore blogStore) : base(blogStore)
        { }

        public IActionResult Index(int postId)
        {
            if (postId == 0)
            {
                return RedirectToAction("Index", "Posts");
            }

            ViewData["PostId"] = postId;

            return View(blogStore.GetImagesByPostId(postId, false));
        }

        public IActionResult Details(int id)
        {
            return GetImage(id);
        }

        public IActionResult Create(int postId)
        {
            return View(new Image() { PostId = postId });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("Id,Description,PostId,Url")] Image image)
        {
            return CreateEntity(image,
                () => RedirectToAction("Create", new { postId = image.PostId }));
        }

        public IActionResult Edit(int id)
        {
            return GetImage(id);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, [Bind("Id,Description,PostId,Url")] Image image)
        {
            if (id != image.Id)
            {
                return NotFound();
            }

            return UpdateEntity(image,
                () => RedirectToAction("Index", new { postId = image.PostId }));
        }

        public IActionResult Delete(int id)
        {
            return GetImage(id);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var image = blogStore.GetImage(id);

            blogStore.Delete(image);

            return RedirectToAction("Index", new { postId = image.PostId });
        }

        private IActionResult GetImage(int id)
        {
            var image = blogStore.GetImage(id);

            return NotNullView(image);
        }
    }
}
