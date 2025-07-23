import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SalesOrders } from "../models/salesorders.interface";
import { Workforce } from "../models/workforce.interface";

@Injectable({
    providedIn: 'root'
})
export class WorkforceService {
    private apiUrl = 'http://localhost:5222';        
    constructor (private http: HttpClient) {}

    getWorkforce(): Observable<Workforce[]> {
        return this.http.get<Workforce[]>(`${this.apiUrl}/workforce`);
    }
}