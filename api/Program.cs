using Equipment.Routes;
using Material.Routes;
using PurschasseOrders.Routes;
using SalesOrders.Routes;
using Workforce.Routes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.EquipmentRoutes();
app.MaterialRouters();
app.PurchaseOrdersRouters();
app.SalesOrdersRouters();
app.WorkforceRouters();
app.Run();