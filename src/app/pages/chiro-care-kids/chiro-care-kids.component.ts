import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { Testimonial } from '../../models/site.models';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-chiro-care-kids',
  imports: [CommonModule],
  templateUrl: './chiro-care-kids.component.html',
  styleUrl: './chiro-care-kids.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChiroCareKidsComponent {
  private readonly mockApi = inject(MockApiService);

  readonly isLoading = signal(true);
  readonly testimonials = signal<Testimonial[]>([]);

  constructor() {
    this.mockApi
      .getTestimonials()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe((items) => this.testimonials.set(items));
  }
}
