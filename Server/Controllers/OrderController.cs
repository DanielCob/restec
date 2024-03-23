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
        [HttpGet]
        public async Task<ActionResult<List<Order>>> Get()
        {
            var data = new OrderData();
            List<Order> list = data.getPedidos(@"Data\Orders.json");
            return list;
        }

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
