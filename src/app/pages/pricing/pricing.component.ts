import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  private readonly flipped = new Set<string>();

  toggle(id: string): void {
    this.flipped.has(id) ? this.flipped.delete(id) : this.flipped.add(id);
  }

  isFlipped(id: string): boolean {
    return this.flipped.has(id);
  }
}
