
namespace Server.Models
{
    public class Bill
    {
        public required int Id { get; set; }
        public required string ClientName { get; set; }
        public string? Date { get; set; }
        public string? Hour { get; set; }
        public float Total { get; set; }
        public string[]? Dishes { get; set; }
    }
}
