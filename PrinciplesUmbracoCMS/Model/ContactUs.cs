using System.ComponentModel.DataAnnotations;

namespace Principles_UmbracoCMS.Model
{
    public class ContactUs
    {
        public int ContactUsId { get; set; }

        [MaxLength(100)]
        public string FullName { get; set; } = string.Empty;

        [MaxLength(100)]
        [EmailAddress]
        public string Email { get; set; }  = string.Empty;

        [MaxLength(300)]
        public string Message { get; set; } = string.Empty;
    }
}
