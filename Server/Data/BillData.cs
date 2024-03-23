using Server.Models;
using System.Text.Json;

namespace Server.Data
{
    public class BillData
    {
        /*
         * Funcion: CreateBill.
         * Entradas: ClientName: nombre del cliente, Date: fecha de la compra, Hour: hora de la compra, Total: monto total, Dishes: lista de platos.
         * Salidas: true en caso de crear correctamente la factura.
         * Este metodo se encarga de crear una factura de un cliente y almacenarla en un json.
         */
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
