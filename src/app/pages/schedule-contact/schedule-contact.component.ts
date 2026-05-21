import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-schedule-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './schedule-contact.component.html',
  styleUrl: './schedule-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly mockApi = inject(MockApiService);

  readonly isSubmitting = signal(false);
  readonly submitResult = signal('');

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitContact(): void {
    if (this.contactForm.invalid || this.isSubmitting()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitResult.set('');

    this.mockApi
      .submitContactForm(this.contactForm.getRawValue())
      .pipe(finalize(() => this.isSubmitting.set(false)))
      .subscribe((result) => {
        this.submitResult.set(`${result.message} Confirmation: ${result.confirmationId}`);
        this.contactForm.reset({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      });
  }
}
