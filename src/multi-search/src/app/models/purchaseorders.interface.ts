export interface PurchaseOrders {
    purchaseOrderID: number,
    deliveryDate: string,
    supplier: string,
    materialID: string,
    materialName: string,
    quantity: number,
    totalCost: number
}