import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipment } from "../models/equipment.interface";


@Injectable({
    providedIn: 'root'
})

export class EquipmentService {
    private apiUrl = 'http://localhost:5222';    
    
    constructor (private http: HttpClient) {}
    
    getEquipments(): Observable<Equipment[]> {
        return this.http.get<Equipment[]>(`${this.apiUrl}/equipment`);
    }
}