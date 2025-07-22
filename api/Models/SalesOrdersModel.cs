namespace SalesOrders.Models;

public class salesOrdersModel
{
    public int SalesOrderID { get; set; }
    public string DeliveryDate { get; set; } = string.Empty;
    public string Customer { get; set; } = string.Empty;
    public string MaterialID { get; set; } = string.Empty;
    public string MaterialName { get; set; } = string.Empty;
    public int Quantity { get; set; }
    public int TotalValue { get; set; }
}