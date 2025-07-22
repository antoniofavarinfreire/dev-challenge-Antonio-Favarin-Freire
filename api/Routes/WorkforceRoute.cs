using System.Text.Json;
using Workforce.Models;

namespace Workforce.Routes;

public static class WorkforceRouter
{
    public static void WorkforceRouters(this WebApplication app)
    {
        app.MapGet("/workforce", async () =>
        {
            var jsonPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "data", "workforce.json");

            
            if (!File.Exists(jsonPath))
            {
                return Results.NotFound("Arquivo nao encontrado");
            }                

            try
            {
                var json = await File.ReadAllTextAsync(jsonPath);
                var equipments = JsonSerializer.Deserialize<List<WorkforceModel>>(json);
                return Results.Ok(equipments);
            }
            catch (Exception ex)
            {
                return Results.Problem($"Erro ao ler o JSON: {ex.Message}");
            }            
        });
    }
}