import { CommonModule } from '@angular/common';
import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PurchaseOrders } from '../../models/purchaseorders.interface';
import { PurchaseOrdersService } from '../../services/purchaseorders.service';

@Component({
  standalone: true,
  selector: 'app-show-purchase-order',
  imports: [FormsModule, CommonModule],
  templateUrl: './show-purchase-order.html',
  styleUrl: './show-purchase-order.css'
})
export class ShowPurchaseOrder implements OnInit {
  searchText: string = '';
  purchaseOrders: PurchaseOrders[] = [];
  loading = false;
  error: string | null = null;
  
  constructor(private purchaseOrdersService: PurchaseOrdersService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Carrega automaticamente quando o componente inicializa
    this.loadPurchaseOrders();
  }

  loadPurchaseOrders() {
    this.loading = true;
    this.error = null;

    this.purchaseOrdersService.getPurchaseOrders().subscribe({
      next: (data) => {
        
          this.purchaseOrders = data;
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