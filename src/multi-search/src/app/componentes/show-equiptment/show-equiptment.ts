import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  allEquipments: Equipment[] = [];
  loading = false;
  error: string | null = null;

  @Input() searchText: string = '';
  @Output() searchLength = new EventEmitter<number>();
  constructor(private equipmentService: EquipmentService, private cdr: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.loadEquipments();
  }


  ngOnChanges(changes: SimpleChanges) {
   if (changes['searchText']) {
      this.applyFilter();
    }
  }

  loadEquipments() {
    this.loading = true;
    this.error = null;

    this.equipmentService.getEquipments().subscribe({
      next: (data) => {
        
          this.equipments = data;
          this.allEquipments = data;
          this.applyFilter();
          this.searchLength.emit(this.equipments.length);
          this.loading = false;
          this.cdr.detectChanges();
        
      },
      error: (err) => {
        
          this.error = 'Erro ao carregar ordem de compra: ' + err.message;
          this.loading = false;
          this.cdr.detectChanges();
        
      }
    });
  }

  applyFilter() {
    const search = this.searchText.trim().toLowerCase();
    if (!search) {
      this.equipments = [...this.allEquipments];
      this.searchLength.emit(this.equipments.length);
    } else {
      this.equipments = this.allEquipments.filter(equipment =>
        equipment.equipmentID.toLowerCase().includes(search) ||
        equipment.equipmentName.toLowerCase().includes(search)
      );
      this.searchLength.emit(this.equipments.length);
    }
  }
}
