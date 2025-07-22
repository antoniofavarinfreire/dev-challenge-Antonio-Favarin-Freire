namespace PurchasseOrders.Models;

public class PurschasseOrdersModels
{
    public int PurchaseOrderID { get; set; }
    public string DeliveryDate { get; set; } = string.Empty;
    public string Supplier { get; set; } = string.Empty;
    public string MaterialID { get; set; } = string.Empty;
    public string MaterialName { get; set; } = string.Empty;
    public int Quantity { get; set; }
    public int TotalCost { get; set; }
}