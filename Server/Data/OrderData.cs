using Server.Models;
using System.Text.Json;

namespace Server.Data
{
    public class OrderData
    {
        /*
         * Funcion: getPedidos.
         * Entradas: Path: ruta del archivo json que almacena los pedidos.
         * Salidas: lista de objetos pedido.
         * Este metodo se encarga de crear una lista de objetos pedido para ser enviada al front-end.
         */
        public List<Order> getPedidos(string Path)
        {
            var json = File.ReadAllText(Path);
            List<Order> orders = JsonSerializer.Deserialize<List<Order>>(json);
            return orders;
        }

        /*
         * Funcion: setPedidos.
         * Entradas: pedido: objeto pedido con la informacion del pedido.
         * Salidas: No.
         * Este metodo se encarga de almacenar el pedido en un archivo json.
         */
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
