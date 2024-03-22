using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/Pedidos")]
    public class PedidoController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Pedido>>> Get()
        {
            var data = new PedidosData();
            List<Pedido> lista = data.getPedidos(@"Data\Pedidos.json");
            return lista;
        }
    }
}
