using Microsoft.AspNetCore.Mvc;
using Server.Data;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/Bills")]
    public class BillController : ControllerBase
    {
        /*
         * Funcion: Bill.
         * Entradas: ClientName: nombre del cliente, Date: fecha de la compra, Hour: hora de la compra, Total: monto total, Dishes: lista de platos.
         * Salidas: Ok() en caso de crear correctamente la factura, BadRequest() en caso contrario.
         * Este metodo se encarga de crear y almacenar una factura.
         */
        [HttpPost("Generate")]
        public IActionResult Bill(string ClientName, string Date, string Hour, float Total, string[] Dishes) 
        {
            var billData = new BillData();
            bool status = billData.CreateBill(ClientName, Date, Hour, Total, Dishes);

            if (status) 
            {
                return Ok("Success");
            }
            return BadRequest("Error al crear la factura");
        }
    }
}
