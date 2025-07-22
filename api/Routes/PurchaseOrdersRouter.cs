using System.Text.Json;
using PurchasseOrders.Models;

namespace PurschasseOrders.Routes;

public static class PurschasseOrdersRouter
{
    public static void PurchaseOrdersRouters(this WebApplication app)
    {
        app.MapGet("/purchaseorders", async () =>
        {
            var jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "data", "purchase_orders.json");

            Console.WriteLine($"[DEBUG] Caminho do JSON: {jsonPath}");
            if (!File.Exists(jsonPath))
            {
                return Results.NotFound("Arquivo não encontrado");
            }

            try
            {
                var json = await File.ReadAllTextAsync(jsonPath);
                var equipments = JsonSerializer.Deserialize<List<PurschasseOrdersModels>>(json);
                return Results.Ok(equipments);
            }
            catch (Exception ex)
            {
                return Results.Problem($"Erro ao ler o JSON: {ex.Message}");
            }
        });
    }
}