import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Equipment } from '../../models/equipment.interface';
import { EquipmentService } from '../../services/equipment.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-show-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './show-search.html',
  styleUrl: './show-search.css'
})
export class ShowSearch implements OnInit {
 searchText: string = '';
 equipments: Equipment[] = [];
  loading = false;
  error: string | null = null;

  constructor(private equipmentService: EquipmentService) {}
  
  onSearch() {
    console.log('Buscar por:', this.searchText);
    // Aqui você pode chamar seu serviço ou filtrar a lista, etc.
  }

  ngOnInit() {
    // Carrega automaticamente quando o componente inicializa
    this.loadEquipments();
  }

   loadEquipments() {
    this.loading = true;
    this.error = null;
    
    this.equipmentService.getEquipments().subscribe({
      next: (data) => {
        this.equipments = data;
        this.loading = false;
        console.log('Equipamentos carregados:', data);
      },
      error: (err) => {
        this.error = 'Erro ao carregar equipamentos: ' + err.message;
        this.loading = false;
        console.error('Erro:', err);
      }
    });
  }
}
