import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  ContactResponse,
  ContactSubmission,
  FaqItem,
  ServiceItem,
  Testimonial,
} from '../models/site.models';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  getServices(): Observable<ServiceItem[]> {
    const services: ServiceItem[] = [
      {
        title: 'Prenatal Chiropractic Care',
        description:
          'Comfort-forward adjustments that support pelvic balance, reduce tension, and help your body adapt during each trimester.',
        audience: 'Expecting moms',
      },
      {
        title: 'Postpartum Recovery Support',
        description:
          'Gentle care focused on realigning and restoring stability after birth, while helping with feeding and carrying strain.',
        audience: 'New moms',
      },
      {
        title: 'Infant and Pediatric Chiropractic',
        description:
          'Light, specific techniques for babies and children to support comfort, sleep, latch, and healthy movement patterns.',
        audience: 'Babies and kids',
      },
      {
        title: 'Family Wellness Care',
        description:
          'Personalized plans for every stage of life to improve mobility, decrease pain, and keep your family moving well.',
        audience: 'Whole family',
      },
    ];

    return of(services).pipe(delay(500));
  }

  getTestimonials(): Observable<Testimonial[]> {
    const testimonials: Testimonial[] = [
      {
        name: 'Alyssa R.',
        stage: '31 weeks pregnant',
        quote:
          'I walked in with hip pain and left feeling hopeful. Every visit made pregnancy feel more manageable and calm.',
      },
      {
        name: 'Jordan and Mia',
        stage: 'Parents of 2',
        quote:
          'From newborn checks to our own care, this office feels like a safe place for our entire family.',
      },
      {
        name: 'Nora T.',
        stage: 'Postpartum month 2',
        quote:
          'The care is gentle, thoughtful, and practical. I finally feel stable again after delivery.',
      },
    ];

    return of(testimonials).pipe(delay(650));
  }

  getFaqs(): Observable<FaqItem[]> {
    const faqs: FaqItem[] = [
      {
        question: 'Is prenatal chiropractic care safe?',
        answer:
          'Yes. We use pregnancy-specific techniques and positioning to keep visits comfortable and safe through all stages.',
      },
      {
        question: 'Do you see babies and children?',
        answer:
          'Absolutely. Pediatric visits use very gentle pressure and are tailored to each child\'s age and comfort level.',
      },
      {
        question: 'How long is the first appointment?',
        answer:
          'Most first visits are about 45 minutes and include a history, exam, and care recommendations.',
      },
      {
        question: 'Can I come even if I am not pregnant?',
        answer:
          'Definitely. We welcome all adults and children who want supportive, whole-family chiropractic care.',
      },
    ];

    return of(faqs).pipe(delay(450));
  }

  submitContactForm(payload: ContactSubmission): Observable<ContactResponse> {
    // TODO: Replace with real HTTP call once backend API is available.
    const response: ContactResponse = {
      success: true,
      confirmationId: `JFC-${Date.now()}`,
      message: `Thanks, ${payload.name}. We will reach out within one business day.`,
    };

    return of(response).pipe(delay(900));
  }
}
