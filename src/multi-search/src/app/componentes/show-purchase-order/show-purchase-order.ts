import { CommonModule } from '@angular/common';
import { Component, OnInit, NgZone, ChangeDetectorRef, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
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

  purchaseOrders: PurchaseOrders[] = [];
  allPurchaseOrders: PurchaseOrders[] = [];
  loading = false;
  error: string | null = null;

  @Input() searchText: string = '';
  @Output() searchLength = new EventEmitter<number>();
  
  constructor(private purchaseOrdersService: PurchaseOrdersService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Carrega automaticamente quando o componente inicializa
    this.loadPurchaseOrders();
  }
  
   ngOnChanges(changes: SimpleChanges) {
   if (changes['searchText']) {
      this.applyFilter();
    }
  }

  loadPurchaseOrders() {
    this.loading = true;
    this.error = null;

    this.purchaseOrdersService.getPurchaseOrders().subscribe({
      next: (data) => {
        
          this.purchaseOrders = data;
          this.allPurchaseOrders = data;
          this.applyFilter();
          this.searchLength.emit(this.purchaseOrders.length);
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
      this.purchaseOrders = [...this.allPurchaseOrders];
      this.searchLength.emit(this.purchaseOrders.length);
    } else {
      this.purchaseOrders = this.allPurchaseOrders.filter(order =>
        order.purchaseOrderID.toString().includes(search) ||
        order.materialName.toLowerCase().includes(search) || 
        order.quantity.toString().includes(search) 
      );
       this.searchLength.emit(this.purchaseOrders.length);
    }
  }
}