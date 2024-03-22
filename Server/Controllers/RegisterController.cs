using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/register")]
    public class RegisterController : ControllerBase
    {
        // GET: api/admin
        [HttpGet("admin")]
        public async Task<ActionResult<List<User>>> GetAdmin()
        {
            var data = new UserData();
            List<User> list = data.getUser(@"Data\Admins.json");
            return list;
        }
        // POST: api/admin
        [HttpPost("admin")]
        public IActionResult PostAdmin(int num_ced, string name, String first_name, String last_name, String province, String city,
                                                   String distric, String birth_date, String phone, String e_mail, String password)
        {
            try {
                var data = new UserData();
                data.postUser(@"Data\Admins.json", num_ced, name, first_name,last_name, province, city, distric, birth_date, phone, e_mail, password);
                
                return Ok("Success");
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // GET: api/chef
        [HttpGet("chef")]
        public async Task<ActionResult<List<User>>> GetChef()
        {
            var data = new UserData();
            List<User> list = data.getUser(@"Data\Chefs.json");
            return list;
        }
        // POST: api/chef
        [HttpPost("chef")]
        public IActionResult PostChef(int num_ced, string name, String first_name, String last_name, String province, String city,
                                                   String distric, String birth_date, String phone, String e_mail, String password)
        {
            try
            {
                var data = new UserData();
                data.postUser(@"Data\Chefs.json", num_ced, name, first_name, last_name, province, city, distric, birth_date, phone, e_mail, password);

                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // GET: api/client
        [HttpGet("client")]
        public async Task<ActionResult<List<User>>> GetClient()
        {
            var data = new UserData();
            List<User> list = data.getUser(@"Data\Clients.json");
            return list;
        }
        // POST: api/client
        [HttpPost("client")]
        public IActionResult PostClient(int num_ced, string name, String first_name, String last_name, String province, String city,
                                                   String distric, String birth_date, String phone, String e_mail, String password)
        {
            try
            {
                var data = new UserData();
                data.postUser(@"Data\Clients.json", num_ced, name, first_name, last_name, province, city, distric, birth_date, phone, e_mail, password);

                return Ok("Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
