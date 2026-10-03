import { Component } from '@angular/core';

@Component({
  selector: 'app-services-booking',
  standalone: true,
  templateUrl: './services-booking.component.html',
  styleUrl: './services-booking.component.scss',
})
export class ServicesBookingComponent {
  // Both locations share one Jane App site; the app prompts for the location.
  private readonly bookingUrl = 'https://juniperfamilychiro.janeapp.com';

  readonly northAugustaBookingHref = this.bookingUrl;
  readonly greenvilleBookingHref = this.bookingUrl;
}
