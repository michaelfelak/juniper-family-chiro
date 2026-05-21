import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { FaqItem } from '../../models/site.models';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-new-patients',
  imports: [CommonModule],
  templateUrl: './new-patients.component.html',
  styleUrl: './new-patients.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPatientsComponent {
  private readonly mockApi = inject(MockApiService);

  readonly isLoading = signal(true);
  readonly faqs = signal<FaqItem[]>([]);

  constructor() {
    this.mockApi
      .getFaqs()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((items) => this.faqs.set(items));
  }
}
