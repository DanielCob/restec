using Server.Models;
using System.Text.Json;

namespace Server.Data
{
    public class BillData
    {
        public bool CreateBill(string ClientName, string Date, string Hour, float Total, string[] Dishes)
        {
            try 
            {
                Random rnd = new Random();
                int id = rnd.Next(10000, 100000);

                Bill bill = new Bill { Id = id, ClientName = ClientName, Date = Date, Hour = Hour, Total = Total, Dishes = Dishes };
                var json = File.ReadAllText(@"Data\Bills.json");
                List<Bill> bills = JsonSerializer.Deserialize<List<Bill>>(json);
                bills.Add(bill);
                
                var newJson = JsonSerializer.Serialize(bills, new JsonSerializerOptions { WriteIndented = true });
                File.WriteAllText(@"Data\Bills.json", newJson);

                return true;
            } catch { return false; }
        }
    }
}
