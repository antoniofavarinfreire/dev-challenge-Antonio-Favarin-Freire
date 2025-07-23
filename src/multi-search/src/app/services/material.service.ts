import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Material } from "../models/material.interface";

@Injectable({
    providedIn: 'root'
})
export class MaterialService {
    private apiUrl = 'http://localhost:5222';    
    
    constructor (private http: HttpClient) {}
    
    getEquipments(): Observable<Material[]> {
        return this.http.get<Material[]>(`${this.apiUrl}/material`);
    }
}