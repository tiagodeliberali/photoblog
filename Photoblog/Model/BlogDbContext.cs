using Microsoft.EntityFrameworkCore;
using Photoblog.Model.Entities;

namespace Photoblog.Model
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options)
            : base(options)
        { }

        public DbSet<Post> Posts { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Image> Images { get; set; }
    }
}
