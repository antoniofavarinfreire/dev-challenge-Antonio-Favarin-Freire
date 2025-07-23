import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PurchaseOrdersService } from '../../services/purchaseorders.service';
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material.interface';

@Component({
  selector: 'app-show-material',
  imports: [FormsModule, CommonModule],
  templateUrl: './show-material.html',
  styleUrl: './show-material.css'
})
export class ShowMaterial  implements OnInit {
  loading = false;
  error: string | null = null;
  materials: Material[] = [];
  
  constructor(private materialService: MaterialService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadMaterial();
  }

  loadMaterial() {
    this.loading = true;
    this.error = null;
  
    this.materialService.getEquipments().subscribe({
      next: (data) => {
        this.materials = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Erro ao carregar equipamentos: ' + err.message;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
