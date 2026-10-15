import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookingTrackingService } from '../../services/booking-tracking.service';
import { LOCATION_DETAILS, LocationDetails, LocationSlug } from '../../data/location-data';

function getLocationSlug(path: string | undefined): LocationSlug {
  if (path === 'greenville' || path === 'north-augusta') return path;
  throw new Error(`Unknown location page route: ${path ?? '(missing)'}`);
}

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss',
})
export class LocationPageComponent {
  private readonly bookingTracking = inject(BookingTrackingService);
  private readonly route = inject(ActivatedRoute);
  readonly location: LocationDetails =
    LOCATION_DETAILS[getLocationSlug(this.route.snapshot.routeConfig?.path)];

  trackBookingClick(): void {
    this.bookingTracking.trackBookingClick(this.location.slug, this.location.bookingUrl);
  }
}
