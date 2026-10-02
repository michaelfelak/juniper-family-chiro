import { Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { ChiroCareKidsComponent } from './pages/chiro-care-kids/chiro-care-kids.component';
import { PediatricsPageComponent } from './pages/pediatrics-page/pediatrics-page.component';
import { PregnancyPageComponent } from './pages/pregnancy-page/pregnancy-page.component';
import { ServicesBookingComponent } from './pages/services-booking/services-booking.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'welcome' },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'pregnancy-page', component: PregnancyPageComponent },
	{ path: 'chiro-care-kids', component: ChiroCareKidsComponent },
	{ path: 'pediatrics', component: PediatricsPageComponent },
	{ path: 'services-booking', component: ServicesBookingComponent },
	{ path: 'about-us', component: AboutUs },
	{ path: '**', redirectTo: 'welcome' },
];
