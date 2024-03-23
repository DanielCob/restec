using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;
using System.Text.Json;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrderController : ControllerBase
    {
        /*
         * Funcion: Get.
         * Entradas: No.
         * Salidas: lista con los pedidos almacenados en el servidor.
         * Este metodo se encarga obtener todas los pedidos realizados.
         */
        [HttpGet]
        public async Task<ActionResult<List<Order>>> Get()
        {
            var data = new OrderData();
            List<Order> list = data.getPedidos(@"Data\Orders.json");
            return list;
        }

        /*
         * Funcion: create.
         * Entradas: pedido: string en formato json con todos los detalles del pedidos.
         * Salidas: Ok() en caso de almacenar correctamente el pedido, BadRequest() en caso contrario.
         * Este metodo se encarga de crear un nuevo pedido y almacenarlo en el servidor.
         */
        [HttpPost]
        public IActionResult create(string pedido) 
        {
            try
            {
                Order jsonObject = JsonSerializer.Deserialize<Order>(pedido);
                var data = new OrderData();
                data.setPedido(jsonObject);

                return Ok("Success");
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }            
        }
    }
}
