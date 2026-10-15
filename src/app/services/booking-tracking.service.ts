import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { LocationSlug } from '../data/location-data';

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

@Injectable({ providedIn: 'root' })
export class BookingTrackingService {
  private readonly document = inject(DOCUMENT);

  trackBookingClick(location: LocationSlug, bookingUrl: string): void {
    const view = this.document.defaultView as AnalyticsWindow | null;
    if (!view) return;

    const dataLayer = view.dataLayer ?? [];
    if (!view.dataLayer) view.dataLayer = dataLayer;
    dataLayer.push({
      event: 'booking_click',
      location,
      destination_url: bookingUrl,
    });
  }
}
