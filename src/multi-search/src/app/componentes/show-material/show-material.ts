import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  allMaterials: Material[] = [];

  @Input() searchText: string = '';
  @Output() searchLength = new EventEmitter<number>();
  constructor(private materialService: MaterialService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadMaterial();
  }

  ngOnChanges(changes: SimpleChanges) {
   if (changes['searchText']) {
      this.applyFilter();
    }
  }

  loadMaterial() {
    this.loading = true;
    this.error = null;
  
    this.materialService.getEquipments().subscribe({
      next: (data) => {
        this.materials = data;
        this.allMaterials = data;
        this.applyFilter();
        this.searchLength.emit(this.materials.length);
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
  
  applyFilter() {
    const search = this.searchText.trim().toLowerCase();
    if (!search) {
      this.materials = [...this.allMaterials];
      this.searchLength.emit(this.materials.length);
    } else {
      this.materials = this.allMaterials.filter(material =>
        material.materialID.toLowerCase().includes(search) ||
        material.materialName.toLowerCase().includes(search)
      );
      this.searchLength.emit(this.materials.length);
    }
  }
}
