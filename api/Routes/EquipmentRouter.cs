using System.Text.Json;
using Equipment.Models;
namespace Equipment.Routes;

public static class EquipmentRouter
{
    public static void EquipmentRoutes(this WebApplication app)
    {
        app.MapGet("/equipment", async () =>
        {
           var jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "data", "equipments.json");

            Console.WriteLine($"[DEBUG] Caminho do JSON: {jsonPath}");
            if (!File.Exists(jsonPath))
            {
                return Results.NotFound("Arquivo não encontrado");
            }

            try
            {
                var json = await File.ReadAllTextAsync(jsonPath);
                var equipments = JsonSerializer.Deserialize<List<EquipmentModel>>(json);
                return Results.Ok(equipments);
            }
            catch (Exception ex)
            { 
                return Results.Problem($"Erro ao ler o JSON: {ex.Message}");
            }
        });
    }
}