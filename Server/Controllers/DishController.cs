using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;
using System.Numerics;
using System.Text.Json;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/")]
    public class DishController : ControllerBase
    {
        // POST: api/dishes
        [HttpPost("create/dishes")]
        public IActionResult CreateDish(String name, String description)
        {
            try
            {
                var data = new DishData();
                data.createDish(@"Data\Dishes.json", name, description);

                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // POST: api/dishes
        [HttpPost("delete/dishes")]
        public IActionResult DeleteDish(String name)
        {
            try
            {
                var data = new DishData();
                int status = data.deleteDish(@"Data\Dishes.json", name);
                      
                if (status == 200)
                {
                    return Ok("Success");
                }
                else
                {
                    return BadRequest("The Dish doesn't exist");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // POST: api/dishes
        [HttpPost("modify/dishes")]
        public IActionResult ModifyDish(String name, string description)
        {
            try
            {
                var data = new DishData();
                int status = data.modifyDish(@"Data\Dishes.json", name, description);

                if (status == 200)
                {
                    return Ok("Success");
                }
                else
                {
                    return BadRequest("The Dish doesn't exist");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
