using Server.Models;
using System.Text.Json;

namespace Server.Data
{
    public class PedidosData
    {
        public List<Pedido> getPedidos(string Path)
        {
            var json = File.ReadAllText(Path);
            List<Pedido> pedidos = JsonSerializer.Deserialize<List<Pedido>>(json);
            return pedidos;

        }
    }
}
