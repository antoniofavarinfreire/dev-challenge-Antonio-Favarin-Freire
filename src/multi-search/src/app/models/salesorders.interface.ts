export interface PurchaseOrders {
    salesOrderID: number,
    deliveryDate: string,
    customer: string,
    materialID: string,
    materialName: string,
    quantity: number,
    totalValue: number
}