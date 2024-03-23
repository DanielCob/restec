using Microsoft.AspNetCore.Mvc;
using Server.Data;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/Bills")]
    public class BillController : ControllerBase
    {
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
