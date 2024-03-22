using Server.Models;
using System.Text.Json;

namespace Server.Data
{
    public class OrderData
    {
        public List<Order> getPedidos(string Path)
        {
            var json = File.ReadAllText(Path);
            List<Order> orders = JsonSerializer.Deserialize<List<Order>>(json);
            return orders;
        }

        public void setPedido(Order pedido) 
        {
            var json = File.ReadAllText(@"Data\Orders.json");
            List<Order> orders = JsonSerializer.Deserialize<List<Order>>(json);
            orders.Add(pedido);

            var newJson = JsonSerializer.Serialize(orders, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(@"Data\Orders.json", newJson);
        }
    }
}
