import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { StaffMember } from '../../models/site.models';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs {
  private readonly mockApi = inject(MockApiService);

  readonly isLoading = signal(true);
  readonly staff = signal<StaffMember[]>([]);

  constructor() {
    this.mockApi
      .getStaff()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe(members => this.staff.set(members));
  }
}

