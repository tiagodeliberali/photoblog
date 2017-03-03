using System.Collections.Generic;

namespace Photoblog.Model.Entities
{
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public List<Post> Posts { get; set; }
    }
}
