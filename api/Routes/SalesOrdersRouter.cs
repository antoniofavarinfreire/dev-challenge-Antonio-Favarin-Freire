using System.Text.Json;
using SalesOrders.Models;

namespace SalesOrders.Routes;

public static class SalesOrdersRouter
{ 
    public static void SalesOrdersRouters(this WebApplication app)
    {
        app.MapGet("/salesorders", async () =>
        {
            var jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "data", "sales_orders.json");

            Console.WriteLine($"[DEBUG] Caminho do JSON: {jsonPath}");
            if (!File.Exists(jsonPath))
            {
                return Results.NotFound("Arquivo nao encontrado");
            }

            try
            {
                var json = await File.ReadAllTextAsync(jsonPath);
                var equipments = JsonSerializer.Deserialize<List<salesOrdersModel>>(json);
                return Results.Ok(equipments);
            }
            catch (Exception ex)
            {
                return Results.Problem($"Erro ao ler o JSON: {ex.Message}");
            }
        });
    }
}