import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Workforce } from '../../models/workforce.interface';
import { WorkforceService } from '../../services/workforce.service';

@Component({
  selector: 'app-show-work-force',
  imports: [FormsModule, CommonModule],
  templateUrl: './show-work-force.html',
  styleUrl: './show-work-force.css',
})
export class ShowWorkForce implements OnInit {
  workForce: Workforce[] = [];
  allWorkForce: Workforce[] = [];
  loading = false;
  error: string | null = null;

  @Input() searchText: string = '';

  constructor(private workForceService: WorkforceService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.loadWorkForce();
  }

  ngOnChanges(changes: SimpleChanges) {
   if (changes['searchText']) {
      this.applyFilter();
    }
  }

  loadWorkForce() {
    this.loading = true;
    this.error = null;

    this.workForceService.getWorkforce().subscribe({
      next: (data) => {
        
          this.workForce = data;
          this.allWorkForce = data;
          this.applyFilter();
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
      this.workForce = [...this.allWorkForce];
    } else {
      this.workForce = this.allWorkForce.filter(workForce =>
        workForce.workforceID.toString().includes(search) ||
        workForce.name.toLowerCase().includes(search) ||
        workForce.shift.toLowerCase().includes(search)
      );
    }
  }
}
