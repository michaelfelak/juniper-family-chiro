import { Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { PediatricsPageComponent } from './pages/pediatrics-page/pediatrics-page.component';
import { PregnancyPageComponent } from './pages/pregnancy-page/pregnancy-page.component';
import { ServicesBookingComponent } from './pages/services-booking/services-booking.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LOCATION_DETAILS } from './data/location-data';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: WelcomeComponent,
		title: 'Juniper Family Chiropractic | Greenville & North Augusta, SC',
		data: {
			description: 'Family chiropractic care with a special focus on pregnancy and pediatrics in Greenville and North Augusta, South Carolina.',
			canonicalUrl: 'https://juniperfamilychiro.com/',
		},
	},
	{
		// Real route (not a redirect) so /welcome is prerendered to its own index.html and stays at /welcome.
		path: 'welcome',
		pathMatch: 'full',
		component: WelcomeComponent,
		title: 'Juniper Family Chiropractic | Greenville & North Augusta, SC',
		data: {
			description: 'Family chiropractic care with a special focus on pregnancy and pediatrics in Greenville and North Augusta, South Carolina.',
			canonicalUrl: 'https://juniperfamilychiro.com/',
		},
	},
	{ path: 'pregnancy-page', redirectTo: 'pregnancy' },
	{
		path: 'pregnancy',
		component: PregnancyPageComponent,
		title: 'Pregnancy Chiropractic Care | Juniper Family Chiropractic',
		data: {
			description: 'Pregnancy chiropractic care and Webster Analysis in Greenville and North Augusta, SC. Learn about gentle support for every phase of pregnancy.',
			canonicalUrl: 'https://juniperfamilychiro.com/pregnancy',
		},
	},
	{
		path: 'pediatrics',
		component: PediatricsPageComponent,
		title: 'Pediatric Chiropractic Care | Juniper Family Chiropractic',
		data: {
			description: 'Gentle pediatric chiropractic care for babies and children at Juniper Family Chiropractic in Greenville and North Augusta, SC.',
			canonicalUrl: 'https://juniperfamilychiro.com/pediatrics',
		},
	},
	{
		path: 'north-augusta',
		component: LocationPageComponent,
		title: LOCATION_DETAILS['north-augusta'].pageTitle,
		data: {
			locationSlug: 'north-augusta',
			description: LOCATION_DETAILS['north-augusta'].description,
			canonicalUrl: 'https://juniperfamilychiro.com/north-augusta',
		},
	},
	{
		path: 'greenville',
		component: LocationPageComponent,
		title: LOCATION_DETAILS.greenville.pageTitle,
		data: {
			locationSlug: 'greenville',
			description: LOCATION_DETAILS.greenville.description,
			canonicalUrl: 'https://juniperfamilychiro.com/greenville',
		},
	},
	{
		path: 'services-booking',
		component: ServicesBookingComponent,
		title: 'Services & Booking | Juniper Family Chiropractic',
		data: {
			description: 'Learn about chiropractic visits and care options at Juniper Family Chiropractic, serving families in Greenville and North Augusta, SC.',
			canonicalUrl: 'https://juniperfamilychiro.com/services-booking',
		},
	},
	{
		path: 'about-us',
		component: AboutUs,
		title: 'About Us | Juniper Family Chiropractic',
		data: {
			description: 'Meet Dr. Ashley Felak and Dr. Haven Wood, family chiropractors serving Greenville and North Augusta, SC.',
			canonicalUrl: 'https://juniperfamilychiro.com/about-us',
		},
	},
	{ path: '**', redirectTo: '' },
];
