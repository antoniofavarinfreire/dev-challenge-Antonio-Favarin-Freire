import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SalesOrders } from "../models/salesorders.interface";

@Injectable({
    providedIn: 'root'
})
export class SaleordersService {
    private apiUrl = 'http://localhost:5222';        
    constructor (private http: HttpClient) {}

    getSalesOrders(): Observable<SalesOrders[]> {
        return this.http.get<SalesOrders[]>(`${this.apiUrl}/salesorders`);
    }
}