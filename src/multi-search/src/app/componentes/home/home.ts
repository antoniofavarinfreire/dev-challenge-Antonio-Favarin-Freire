import { ChangeDetectorRef, Component } from '@angular/core';
import { ShowPurchaseOrder } from '../show-purchase-order/show-purchase-order';
import { ShowSaleOrder } from '../show-sale-order/show-sale-order';
import { ShowEquiptment } from '../show-equiptment/show-equiptment';
import { ShowMaterial } from '../show-material/show-material';
import { ShowWorkForce } from '../show-work-force/show-work-force';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ShowPurchaseOrder, ShowSaleOrder, ShowEquiptment, ShowMaterial, ShowWorkForce, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  searchText: string = '';
  searchLengths: Record<string, number> = {};
  lastSearchLength: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}
  
  onLengthReceived(source: string, length: number): void {
     this.searchLengths[source] = length;
    setTimeout(() => {
    this.lastSearchLength = Object.values(this.searchLengths).reduce((a, b) => a + b, 0);
    this.cdr.detectChanges();
  });
  }
}
