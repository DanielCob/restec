namespace Server.Models
{
    public class User
    {
        // Properties
        public required int num_ced { get; set; }
        public String name { get; set; }
        public String first_name { get; set; }
        public String last_name { get; set; }
        public String province { get; set; }
        public String city { get; set; }
        public String distric { get; set; }
        public String birth_date { get; set; }
        public String phone { get; set; }
        public String e_mail { get; set; }
        public String password { get; set; }
    }
}
