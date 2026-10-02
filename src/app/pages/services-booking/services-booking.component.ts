import { Component } from '@angular/core';

@Component({
  selector: 'app-services-booking',
  standalone: true,
  templateUrl: './services-booking.component.html',
  styleUrl: './services-booking.component.scss',
})
export class ServicesBookingComponent {
  private readonly bookingEmail = 'juniperfamilychiro@gmail.com';

  // TODO: ADD NORTH AUGUSTA BOOKING URL
  readonly northAugustaBookingHref = `mailto:${this.bookingEmail}?subject=Booking%20in%20North%20Augusta`;

  // TODO: ADD GREENVILLE BOOKING URL
  readonly greenvilleBookingHref = `mailto:${this.bookingEmail}?subject=Booking%20in%20Greenville`;
}
