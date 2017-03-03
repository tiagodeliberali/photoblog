using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Photoblog.Model;
using Photoblog.Model.Entities;
using Photoblog.Model.Extensions;

namespace Photoblog.Controllers
{
    [Authorize]
    public class ImagesController : Controller
    {
        private readonly BlogDbContext _context;
        private IMemoryCache _memoryCache;

        public ImagesController(BlogDbContext context, IMemoryCache memoryCache)
        {
            _context = context;
            _memoryCache = memoryCache;
        }

        // GET: Images
        public async Task<IActionResult> Index(int postId)
        {
            if (postId == 0)
            {
                return RedirectToAction("Index", "Posts");
            }

            ViewData["PostId"] = postId;

            var blogDbContext = _context.Images.Include(i => i.Post).Where(x => x.PostId == postId);
            return View(await blogDbContext.ToListAsync());
        }

        // GET: Images/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var image = await _context.Images.SingleOrDefaultAsync(m => m.Id == id);
            if (image == null)
            {
                return NotFound();
            }

            return View(image);
        }

        // GET: Images/Create
        public IActionResult Create(int postId)
        {
            ViewData["Posts"] = new SelectList(_context.Posts, "Id", "Title");
            return View(new Image() { PostId = postId });
        }

        // POST: Images/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Description,PostId,Url")] Image image)
        {
            if (ModelState.IsValid)
            {
                _context.Add(image);
                await _context.SaveChangesAsync();

                var post = _context.Posts.First(x => x.Id == image.PostId);
                _memoryCache.ClearPostCache(post.Link, post.CategoryId);

                return RedirectToAction("Index", new { postId = image.PostId });
            }
            ViewData["PostId"] = new SelectList(_context.Posts, "Id", "Title", image.PostId);
            return View(image);
        }

        // GET: Images/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var image = await _context.Images.SingleOrDefaultAsync(m => m.Id == id);
            if (image == null)
            {
                return NotFound();
            }
            ViewData["PostId"] = new SelectList(_context.Posts, "Id", "Title", image.PostId);
            return View(image);
        }

        // POST: Images/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Description,PostId,Url")] Image image)
        {
            if (id != image.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(image);
                    await _context.SaveChangesAsync();

                    var post = _context.Posts.First(x => x.Id == image.PostId);
                    _memoryCache.ClearPostCache(post.Link, post.CategoryId);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ImageExists(image.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index", new { postId = image.PostId });
            }
            ViewData["PostId"] = new SelectList(_context.Posts, "Id", "Title", image.PostId);
            return View(image);
        }

        // GET: Images/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var image = await _context.Images.SingleOrDefaultAsync(m => m.Id == id);
            if (image == null)
            {
                return NotFound();
            }

            return View(image);
        }

        // POST: Images/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var image = await _context.Images.SingleOrDefaultAsync(m => m.Id == id);
            _context.Images.Remove(image);
            await _context.SaveChangesAsync();

            var post = _context.Posts.First(x => x.Id == image.PostId);
            _memoryCache.ClearPostCache(post.Link, post.CategoryId);

            return RedirectToAction("Index", new { postId = image.PostId });
        }

        private bool ImageExists(int id)
        {
            return _context.Images.Any(e => e.Id == id);
        }
    }
}
