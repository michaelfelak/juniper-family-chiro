import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { ServiceItem } from '../../models/site.models';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-pregnancy',
  imports: [CommonModule],
  templateUrl: './pregnancy.component.html',
  styleUrl: './pregnancy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PregnancyComponent {
  private readonly mockApi = inject(MockApiService);

  readonly isLoading = signal(true);
  readonly services = signal<ServiceItem[]>([]);

  constructor() {
    this.mockApi
      .getServices()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((items) => this.services.set(items));
  }
}
