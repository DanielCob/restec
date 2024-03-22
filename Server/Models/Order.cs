namespace Server.Models
{
    public class Order
    {
        public required int PedidoId { get; set; }
        public bool Active { get; set; }
        public bool Assigned { get; set; }
        public string? Chef {  get; set; }
        //TODO lista de platos        
    }
}
