import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PurchaseOrders } from "../models/purchaseorders.interface";

@Injectable({
    providedIn: 'root'
})
export class PurchaseOrdersService {
    private apiUrl = 'http://localhost:5222';    
    
    constructor (private http: HttpClient) {}
    
    getPurchaseOrders(): Observable<PurchaseOrders[]> {
        return this.http.get<PurchaseOrders[]>(`${this.apiUrl}/purchaseorders`);
    }
}