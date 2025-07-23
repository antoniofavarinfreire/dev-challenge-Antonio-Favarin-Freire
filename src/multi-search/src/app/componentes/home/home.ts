import { Component } from '@angular/core';

import { ShowSearch } from '../show-search/show-search';
import { ShowPurchaseOrder } from '../show-purchase-order/show-purchase-order';
import { ShowSaleOrder } from '../show-sale-order/show-sale-order';
import { ShowEquiptment } from '../show-equiptment/show-equiptment';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ShowSearch, ShowPurchaseOrder, ShowSaleOrder, ShowEquiptment],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
