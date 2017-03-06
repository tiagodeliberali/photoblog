using Photoblog.Model.Entities;

namespace Photoblog.Model.ViewModels
{
    public class ImageUploader
    {
        public Image Image { get; set; }
        public string ApiKey { get; set; }
        public string UploadPreset { get; set; }
    }
}
