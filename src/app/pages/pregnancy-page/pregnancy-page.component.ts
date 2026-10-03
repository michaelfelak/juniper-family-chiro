import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PregnancyFaq {
  question: string;
  answer: string;
  citation?: boolean;
}

@Component({
  selector: 'app-pregnancy-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pregnancy-page.component.html',
  styleUrl: './pregnancy-page.component.scss'
})
export class PregnancyPageComponent {
  readonly faqs: PregnancyFaq[] = [
    {
      question: 'Is chiropractic care safe during pregnancy?',
      answer:
        'Yes. Chiropractic care is safe during every phase of pregnancy. We use gentle techniques, pregnancy-specific positioning, and specially designed pillows to keep you comfortable as your body changes.',
    },
    {
      question: 'Can chiropractic care help with pregnancy discomfort?',
      answer:
        'Yes. Many moms seek chiropractic care to help alleviate discomfort and support their bodies as they adapt to the physical changes of pregnancy. Care is always individualized to you and your stage of pregnancy.',
    },
    {
      question: 'Does the Webster Technique turn breech babies?',
      answer:
        'No. The Webster Technique does not turn or reposition babies. Instead, it focuses on restoring proper biomechanics to the pelvis and surrounding structures, creating the best possible environment for baby to find an optimal position for birth. Research has reported resolution of breech positioning in approximately 92% of cases following the use of the Webster technique.',
      citation: true,
    },
    {
      question: 'How long will I need chiropractic care?',
      answer:
        'Every pregnancy and every mom is different. We’ll make recommendations based on your individual needs, stage of pregnancy, and goals for care. As your pregnancy progresses, we’ll continue to reassess and adjust your care plan as needed.',
    },
    {
      question: 'Why should I continue care after my baby is born?',
      answer:
        'Birth is a major physical event, and the postpartum season brings new physical, chemical, and emotional stressors. Continuing care after birth can support your body as it recovers and adapts to the demands of motherhood.',
    },
  ];

  private readonly flipped = new Set<number>();

  toggle(index: number): void {
    if (this.flipped.has(index)) {
      this.flipped.delete(index);
    } else {
      this.flipped.add(index);
    }
  }

  isFlipped(index: number): boolean {
    return this.flipped.has(index);
  }
}
