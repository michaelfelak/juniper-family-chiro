import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize, forkJoin } from 'rxjs';
import { FaqItem, ServiceItem, Testimonial } from '../../models/site.models';
import { MockApiService } from '../../services/mock-api.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly mockApi = inject(MockApiService);

  services: ServiceItem[] = [];
  testimonials: Testimonial[] = [];
  faqs: FaqItem[] = [];

  isContentLoading = true;
  isSubmitting = false;
  submitResult = '';

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  ngOnInit(): void {
    forkJoin({
      services: this.mockApi.getServices(),
      testimonials: this.mockApi.getTestimonials(),
      faqs: this.mockApi.getFaqs(),
    })
      .pipe(finalize(() => (this.isContentLoading = false)))
      .subscribe((data) => {
        this.services = data.services;
        this.testimonials = data.testimonials;
        this.faqs = data.faqs;
      });
  }

  submitContact(): void {
    if (this.contactForm.invalid || this.isSubmitting) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitResult = '';

    this.mockApi
      .submitContactForm(this.contactForm.getRawValue())
      .pipe(finalize(() => (this.isSubmitting = false)))
      .subscribe((result) => {
        this.submitResult = `${result.message} Confirmation: ${result.confirmationId}`;
        this.contactForm.reset({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      });
  }
}
