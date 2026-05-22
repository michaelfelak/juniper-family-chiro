import { Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { ChiroCareKidsComponent } from './pages/chiro-care-kids/chiro-care-kids.component';
import { NewPatientsComponent } from './pages/new-patients/new-patients.component';
import { OurPracticeComponent } from './pages/our-practice/our-practice.component';
import { PregnancyComponent } from './pages/pregnancy/pregnancy.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ScheduleContactComponent } from './pages/schedule-contact/schedule-contact.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'welcome' },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'our-practice', component: OurPracticeComponent },
	{ path: 'pricing', component: PricingComponent },
	{ path: 'pregnancy', component: PregnancyComponent },
	{ path: 'chiro-care-kids', component: ChiroCareKidsComponent },
	{ path: 'new-patients', component: NewPatientsComponent },
	{ path: 'schedule-contact', component: ScheduleContactComponent },
	{ path: 'about-us', component: AboutUs },
	{ path: '**', redirectTo: 'welcome' },
];
