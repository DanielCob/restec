using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/register")]
    public class RegisterController : ControllerBase
    {
        /*
         * Funcion: GetAdmin.
         * Entradas: No.
         * Salidas: lista con la información de los administradores.
         * Este metodo se encarga de enviar la información de todos los administradores almacenados.
         */
        [HttpGet("admin")]
        public async Task<ActionResult<List<User>>> GetAdmin()
        {
            var data = new UserData();
            List<User> list = data.getUser(@"Data\Admins.json");
            return list;
        }

        /*
         * Funcion: PostAdmin.
         * Entradas: num_ced: numero de cedula, name: nombre del nombre, first_name: primer nombre, last_name: apellidos, province: provincia, city: ciudad,
         * distric: distrito, birth_date: fecha de nacimiento, phone: numero de telefono, e_mail: correo electronico, password: contraseña.
         * Salidas: Ok() en caso de registrar correctamente un administrador, BadRequest() en caso contrario.
         * Este metodo se encarga de registrar la información de inicio de sesión de los administradores.
         */
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

        /*
         * Funcion: GetChef.
         * Entradas: No.
         * Salidas: lista con la informacion de los chef registrados.
         * Este metodo se encarga de brindar la informacion de los chef registrados.
         */
        [HttpGet("chef")]
        public async Task<ActionResult<List<User>>> GetChef()
        {
            var data = new UserData();
            List<User> list = data.getUser(@"Data\Chefs.json");
            return list;
        }

        /*
         * Funcion: PostAdmin.
         * Entradas: num_ced: numero de cedula, name: nombre del nombre, first_name: primer nombre, last_name: apellidos, province: provincia, city: ciudad,
         * distric: distrito, birth_date: fecha de nacimiento, phone: numero de telefono, e_mail: correo electronico, password: contraseña.
         * Salidas: Ok() en caso de registrar correctamente un administrador, BadRequest() en caso contrario.
         * Este metodo se encarga de registrar la información de inicio de sesión de los chef.
         */
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

        /*
         * Funcion: GetClient.
         * Entradas: No.
         * Salidas: lista con la informacion de los clientes registrados.
         * Este metodo se encarga de brindar la informacion de los clientes registrados.
         */
        [HttpGet("client")]
        public async Task<ActionResult<List<User>>> GetClient()
        {
            var data = new UserData();
            List<User> list = data.getUser(@"Data\Clients.json");
            return list;
        }

        /*
         * Funcion: PostClient.
         * Entradas: num_ced: numero de cedula, name: nombre del nombre, first_name: primer nombre, last_name: apellidos, province: provincia, city: ciudad,
         * distric: distrito, birth_date: fecha de nacimiento, phone: numero de telefono, e_mail: correo electronico, password: contraseña.
         * Salidas: Ok() en caso de registrar correctamente un cliente, BadRequest() en caso contrario.
         * Este metodo se encarga de registrar la información de inicio de sesión de los clientes.
         */
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
