import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  allSalesOrders: SalesOrders[] = [];
  loading = false;
  error: string | null = null;



  @Input() searchText: string = '';

  constructor(private saleOrdersService: SaleordersService,  private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Carrega automaticamente quando o componente inicializa
    this.loadSalesOrders();
  }

  ngOnChanges(changes: SimpleChanges) {
   if (changes['searchText']) {
      this.applyFilter();
    }
  }

  loadSalesOrders() {
    this.loading = true;
    this.error = null;
    
    this.saleOrdersService.getSalesOrders().subscribe({
      next: (data) => {
        this.salesOrders = data;
        this.allSalesOrders = data;
        this.applyFilter();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Erro ao carregar equipamentos: ' + err.message;
        this.loading = false;
        this.cdr.detectChanges();
        console.error('Erro:', err);
      }
    });
  }

   applyFilter() {
      const search = this.searchText.trim().toLowerCase();
      if (!search) {
        this.salesOrders = [...this.allSalesOrders];
      } else {
        this.salesOrders = this.allSalesOrders.filter(order =>
          order.salesOrderID.toString().includes(search) ||
          order.materialName.toLowerCase().includes(search) ||
          order.quantity.toString().includes(search)
        );
      }
    }

}
