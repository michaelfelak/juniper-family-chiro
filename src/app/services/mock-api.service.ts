import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { StaffMember } from '../models/site.models';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  getStaff(): Observable<StaffMember[]> {
    const staff: StaffMember[] = [
      {
        name: 'Dr. Ashley Felak, CACCP',
        title: 'Family Wellness Chiropractor',
        bio: 'Dr. Ashley is a family wellness chiropractor with a heart for serving growing families, especially expectant mothers and children. She has a special focus on pregnancy and pediatric care and has been proudly supporting women, babies, and children since graduating from Life University in Marietta, Georgia, in 2014. Dr. Ashley is known for her warm, connection-centered approach to care. She believes that strong relationships and open communication are essential to supporting the unique needs of each family. She is certified in the Webster Analysis and, in 2020, completed all coursework and examinations to earn her Certification from the Academy Council on Chiropractic Pediatrics (CACCP).',
        techniques: 'Dr. Ashley is Webster certified, an analysis known for its gentle, specific adjustments designed to bring balance to the pelvis and surrounding structures. This approach helps create optimal conditions for baby’s positioning and can contribute to a more comfortable pregnancy and birth experience. In addition to Webster, Dr. Ashley is skilled in Thompson, Activator, Diversified, and Cranial-Sacral therapy.',
        hobbies: 'When she’s not serving families in the office, Dr. Ashley enjoys spending time with her husband and two daughters at local parks. She also loves reading, baking fresh bread, gardening, and has recently taken up hand embroidery as a creative new hobby.',
        certifications: ['Webster Analysis', 'CACCP Certified', 'Prenatal Care', 'Pediatric Chiropractic'],
        photo: 'images/dr-ashley-felak.jpg',
      },
      {
        name: 'Dr. Haven Wood',
        title: 'Pediatric & Perinatal Chiropractor',
        bio: 'Dr. Haven is a chiropractor with a deep passion for neurologically focused care. She has a special focus on pediatric and perinatal chiropractic care and is committed to supporting families through every stage of life. A proud graduate of Sherman College of Chiropractic, Dr. Haven brings both knowledge and heart to her work. She holds certifications in the Webster Analysis and T.I.C. (Tonal Integrative Correction) and is certified through FOCUS Academy. Dr. Haven continues to expand her expertise through ongoing training with the International Chiropractic Pediatric Association (ICPA).',
        techniques: 'Dr. Haven offers a gentle and effective approach to chiropractic care. She is certified in the Webster Analysis, an analysis designed to bring balance to the pelvis during pregnancy, supporting both mother and baby. In addition to Webster, she is also skilled in the Thompson, Activator, and Diversified techniques, allowing her to tailor care to meet each individual’s unique needs.',
        hobbies: 'When she’s not in the office, Dr. Haven enjoys working out, spending time outdoors, reading, and traveling with her dog, Rebel.',
        certifications: ['Webster Analysis', 'T.I.C. Certified', 'FOCUS Academy', 'ICPA Member'],
        photo: 'images/dr-haven-wood.jpg',
      },
    ];

    return of(staff).pipe(delay(400));
  }
}
