using Server.Models;
using System.Text.Json;

namespace Server.Data
{
    public class UserData
    {
        public List<User> getUser(string Path)
        {
            var json = File.ReadAllText(Path);
            List<User> users = JsonSerializer.Deserialize<List<User>>(json);
            return users;
        }

        public int postUser(string Path, int num_ced, string name, String first_name, String last_name, String province, String city,
                                    String distric, String birth_date, String phone, String e_mail, String password)
        {
            var json = File.ReadAllText(Path);
            List<User> users = JsonSerializer.Deserialize<List<User>>(json);

            User User = new User 
            {
                num_ced = num_ced, 
                name = name, 
                first_name = first_name,
                last_name = last_name, 
                province = province, 
                city = city,            
                distric = distric, 
                birth_date = birth_date, 
                phone = phone, 
                e_mail = e_mail, 
                password = password
            };
            // add the new admin to the list
            users.Add(User);
            // serialize the updated list of admins
            var updatedJson = JsonSerializer.Serialize(users, new JsonSerializerOptions { WriteIndented = true });
            // write the updated json to the file
            File.WriteAllText(Path, updatedJson);

            return 0;
        }
    }
}
