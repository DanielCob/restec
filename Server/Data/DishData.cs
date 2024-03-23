using Server.Models;
using System.Collections.Generic;
using System.IO;
using System.Numerics;
using System.Text.Json;

namespace Server.Data
{
    public class DishData
    {

        public int createDish(string Path, string name, string description)
        {
            var json = File.ReadAllText(Path);
            List<Dish> dishes = JsonSerializer.Deserialize<List<Dish>>(json);

            Dish Dish = new Dish
            {
                name = name,
                description = description
            };
            // add the new dish to the list
            dishes.Add(Dish);
            // serialize the updated list of admins
            var updatedJson = JsonSerializer.Serialize(dishes, new JsonSerializerOptions { WriteIndented = true });
            // write the updated json to the file
            File.WriteAllText(Path, updatedJson);

            return 0;
        }
        public int deleteDish(string Path, string name)
        {
            // Leer y deserializar el JSON
            var json = File.ReadAllText(Path);
            List<Dish> dishes = JsonSerializer.Deserialize<List<Dish>>(json) ?? new List<Dish>(); // Asegura que dishes no sea null

            int status = 400; // Comienza asumiendo que no se encontrará el platillo
            for (int i = dishes.Count - 1; i >= 0; i--)
            {
                if (dishes[i].name == name)
                {
                    dishes.RemoveAt(i); // Remover el platillo por índice
                    status = 200; // Actualizar el estado a éxito
                    break; // Salir del bucle después de encontrar y eliminar el platillo
                }
            }

            // Si se encontró y eliminó el platillo, actualiza el JSON
            if (status == 200)
            {
                // Serializar la lista actualizada a JSON
                var updatedJson = JsonSerializer.Serialize(dishes, new JsonSerializerOptions { WriteIndented = true });
                // Escribir la cadena JSON actualizada de vuelta al archivo
                File.WriteAllText(Path, updatedJson);
            }

            return status; // Retornar el estado final
        }
        public int modifyDish(string Path, string name, string description)
        {
            // Leer y deserializar el JSON
            var json = File.ReadAllText(Path);
            List<Dish> dishes = JsonSerializer.Deserialize<List<Dish>>(json) ?? new List<Dish>(); // Asegura que dishes no sea null

            int status = 400; // Comienza asumiendo que no se encontrará el platillo
            for (int i = dishes.Count - 1; i >= 0; i--)
            {
                if (dishes[i].name == name)
                {
                    dishes.RemoveAt(i); // Remover el platillo por índice
                    Dish Dish = new Dish
                    {
                        name = name,
                        description = description
                    };
                    // add the new admin to the list
                    dishes.Add(Dish);
                    status = 200; // Actualizar el estado a éxito
                    break; // Salir del bucle después de encontrar y eliminar el platillo
                }
            }

            // Si se encontró y eliminó el platillo, actualiza el JSON
            if (status == 200)
            {
                // Serializar la lista actualizada a JSON
                var updatedJson = JsonSerializer.Serialize(dishes, new JsonSerializerOptions { WriteIndented = true });
                // Escribir la cadena JSON actualizada de vuelta al archivo
                File.WriteAllText(Path, updatedJson);
            }

            return status; // Retornar el estado final
        }
    }
}
