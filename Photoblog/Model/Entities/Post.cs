using System;
using System.Collections.Generic;

namespace Photoblog.Model.Entities
{
    public class Post
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Link { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public DateTime Date { get; set; }

        public ICollection<Image> Images { get; set; }
    }
}
