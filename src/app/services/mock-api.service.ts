import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  ContactResponse,
  ContactSubmission,
  FaqItem,
  ServiceItem,
  StaffMember,
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

  getStaff(): Observable<StaffMember[]> {
    const staff: StaffMember[] = [
      {
        name: 'Dr. Ashley Felak, CACCP',
        title: 'Family Wellness Chiropractor',
        bio: 'Dr. Ashley is a family wellness chiropractor with a heart for serving growing families—especially expectant mothers and children. She has a special focus on pregnancy and pediatric care, and has been proudly supporting women and little ones on their wellness journeys since graduating from Life University in Marietta, GA in 2014. Dr. Ashley is known for her warm, connection-centered approach to care. She believes that strong relationships and open communication are essential to supporting the unique needs of each family. She is certified in the Webster Technique and, in 2020, completed all coursework and examinations to earn her Certification from the Academy Council on Chiropractic Pediatrics (CACCP).',
        techniques: 'Dr. Ashley is Webster certified, a technique known for its gentle, specific adjustments designed to bring balance to the pelvis and surrounding structures. This approach helps create optimal conditions for baby\'s positioning and can contribute to a more comfortable pregnancy and birth experience. In addition to Webster, Dr. Ashley is skilled in Thompson, Activator, Diversified, and Cranial-Sacral therapy.',
        hobbies: 'When she\'s not serving families in the office, Dr. Ashley enjoys spending time with her husband and two kids at local parks. She also loves reading, baking fresh bread, gardening, and has recently taken up hand embroidery as a creative new hobby.',
        certifications: ['Webster Technique', 'CACCP Certified', 'Prenatal Care', 'Pediatric Chiropractic'],
        photo: 'images/dr-ashley-felak.jpg',
      },
      {
        name: 'Dr. Haven Wood',
        title: 'Chiropractor — Pediatrics & Perinatal Specialist',
        bio: 'Dr. Haven is a chiropractor with a deep passion for neurologically focused care. She specializes in pediatrics, perinatal, and prenatal chiropractic, and is committed to supporting families through every stage of life. A proud graduate of Sherman College of Chiropractic, Dr. Haven brings both knowledge and heart to her work. She holds certifications in the Webster Protocol and T.I.C. (Tonal Integrative Correction) and is certified through FOCUS Academy. Dr. Haven continues to expand her expertise through ongoing training with the International Chiropractic Pediatric Association (ICPA).',
        techniques: 'Dr. Haven offers a gentle and effective approach to chiropractic care. She is certified in the Webster Protocol, a technique designed to bring balance to the pelvis during pregnancy, supporting both mother and baby. In addition to Webster, she is also skilled in the Thompson, Activator, and Diversified techniques, allowing her to tailor care to meet each individual\'s unique needs.',
        hobbies: 'When she\'s not in the office, Dr. Haven enjoys working out, spending time outdoors, reading, and traveling with her dog, Rebel.',
        certifications: ['Webster Protocol', 'T.I.C. Certified', 'FOCUS Academy', 'ICPA Member'],
        photo: 'images/dr-haven-wood.jpg',
      },
    ];

    return of(staff).pipe(delay(400));
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
