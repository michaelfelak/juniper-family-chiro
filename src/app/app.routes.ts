import { Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { PediatricsPageComponent } from './pages/pediatrics-page/pediatrics-page.component';
import { PregnancyPageComponent } from './pages/pregnancy-page/pregnancy-page.component';
import { ServicesBookingComponent } from './pages/services-booking/services-booking.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'welcome' },
	{
		path: 'welcome',
		component: WelcomeComponent,
		title: 'Juniper Family Chiropractic | Greenville & North Augusta, SC',
		data: { description: 'Family chiropractic care with a special focus on pregnancy and pediatrics in Greenville and North Augusta, South Carolina.' },
	},
	{ path: 'pregnancy-page', redirectTo: 'pregnancy' },
	{
		path: 'pregnancy',
		component: PregnancyPageComponent,
		title: 'Pregnancy Chiropractic Care | Juniper Family Chiropractic',
		data: { description: 'Chiropractic care and the Webster Analysis for every phase of pregnancy in Greenville and North Augusta, SC.' },
	},
	{
		path: 'pediatrics',
		component: PediatricsPageComponent,
		title: 'Pediatric Chiropractic Care | Juniper Family Chiropractic',
		data: { description: 'Gentle chiropractic care for babies and children in Greenville and North Augusta, SC.' },
	},
	{
		path: 'services-booking',
		component: ServicesBookingComponent,
		title: 'Services & Booking | Juniper Family Chiropractic',
		data: { description: 'Learn about visit types and care options, then book online with Juniper Family Chiropractic.' },
	},
	{
		path: 'about-us',
		component: AboutUs,
		title: 'About Us | Juniper Family Chiropractic',
		data: { description: 'Meet Dr. Ashley Felak and Dr. Haven Wood, family chiropractors in Greenville and North Augusta, SC.' },
	},
	{ path: '**', redirectTo: 'welcome' },
];
