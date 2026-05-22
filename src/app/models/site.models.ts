export interface ServiceItem {
  title: string;
  description: string;
  audience: string;
}

export interface Testimonial {
  name: string;
  stage: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  confirmationId: string;
  message: string;
}

export interface StaffMember {
  name: string;
  title: string;
  bio: string;
  techniques: string;
  hobbies: string;
  certifications: string[];
  photo?: string;
}
