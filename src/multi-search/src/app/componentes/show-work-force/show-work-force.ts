import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  loading = false;
  error: string | null = null;

  constructor(private workForceService: WorkforceService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.loadWorkForce();
  }

  loadWorkForce() {
    this.loading = true;
    this.error = null;

    this.workForceService.getWorkforce().subscribe({
      next: (data) => {
        
          this.workForce = data;
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
