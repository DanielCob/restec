using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/login/")]
    public class LoginController : ControllerBase
    {
        // POST: api/admin
        [HttpPost("admin")]
        public IActionResult PostAdmin(String e_mail, String password)
        {
            try
            {
                var data = new UserData();
                List<User> list = data.getUser(@"Data\Admins.json");
                int status = 0;
                foreach (User user in list)
                {
                    if (user.e_mail == e_mail && user.password == password)
                    {
                        status = 200;
                    }else
                    {
                        status = 400;
                    }
                }
                if (status == 200)
                {
                    return Ok("Success");
                }
                else
                {
                    return BadRequest("The information is incorrect");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // POST: api/chef
        [HttpPost("chef")]
        public IActionResult PostChef(String e_mail, String password)
        {
            try
            {
                var data = new UserData();
                List<User> list = data.getUser(@"Data\Chefs.json");
                int status = 0;
                foreach (User user in list)
                {
                    if (user.e_mail == e_mail && user.password == password)
                    {
                        status = 200;
                    }
                    else
                    {
                        status = 400;
                    }
                }
                if (status == 200)
                {
                    return Ok("Success");
                }
                else
                {
                    return BadRequest("The information is incorrect");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // POST: api/chef
        [HttpPost("client")]
        public IActionResult PostClient(String e_mail, String password)
        {
            try
            {
                var data = new UserData();
                List<User> list = data.getUser(@"Data\Clients.json");
                int status = 0;
                foreach (User user in list)
                {
                    if (user.e_mail == e_mail && user.password == password)
                    {
                        status = 200;
                    }
                    else
                    {
                        status = 400;
                    }
                }
                if (status == 200)
                {
                    return Ok("Success");
                }
                else
                {
                    return BadRequest("The information is incorrect");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
