import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SalesOrders } from '../../models/salesorders.interface';
import { SaleordersService } from '../../services/salesorders.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-sale-order',
  imports: [FormsModule, CommonModule],
  templateUrl: './show-sale-order.html',
  styleUrl: './show-sale-order.css'
})
export class ShowSaleOrder  implements OnInit {
  salesOrders: SalesOrders[] = [];
  loading = false;
  error: string | null = null;

  constructor(private saleOrdersService: SaleordersService,  private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Carrega automaticamente quando o componente inicializa
    this.loadSalesOrders();
  }

  loadSalesOrders() {
    this.loading = true;
    this.error = null;
    
    this.saleOrdersService.getSalesOrders().subscribe({
      next: (data) => {
        this.salesOrders = data;
        this.loading = false;
        this.cdr.detectChanges();
        console.log('pedidos de venda carregados:', data);
      },
      error: (err) => {
        this.error = 'Erro ao carregar equipamentos: ' + err.message;
        this.loading = false;
        this.cdr.detectChanges();
        console.error('Erro:', err);
      }
    });
  }
}
