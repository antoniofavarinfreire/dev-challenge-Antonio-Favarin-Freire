import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';
import { Equipment } from '../../models/equipment.interface';

@Component({
  selector: 'app-show-equiptment',
  imports: [FormsModule, CommonModule],
  templateUrl: './show-equiptment.html',
  styleUrl: './show-equiptment.css'
})
export class ShowEquiptment implements OnInit{
  equipments: Equipment[] = [];
  loading = false;
  error: string | null = null;
  
  constructor(private equipmentService: EquipmentService, private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments() {
    this.loading = true;
    this.error = null;

    this.equipmentService.getEquipments().subscribe({
      next: (data) => {
        
          this.equipments = data;
          this.loading = false;
          this.cdr.detectChanges();
          console.log('Purchase orders loaded:', data); // Debug log
        
      },
      error: (err) => {
        
          this.error = 'Erro ao carregar ordem de compra: ' + err.message;
          this.loading = false;
          this.cdr.detectChanges();
          console.error('Error loading purchase orders:', err); // Debug log
        
      }
    });
  }
}
