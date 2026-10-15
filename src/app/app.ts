import { Component, signal, HostListener, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';
import { createStructuredData } from './data/location-data';

interface PageSection {
  id: string;
  label: string;
}

const PAGE_SECTIONS: Record<string, PageSection[]> = {
  pregnancy: [
    { id: 'mission', label: 'Our Mission' },
    { id: 'webster', label: 'Webster Analysis' },
    { id: 'birth-preparation', label: 'Birth Preparation' },
    { id: 'faq', label: 'FAQ' },
  ],
  pediatrics: [
    { id: 'why-care', label: 'Why parents come' },
    { id: 'whole-child', label: 'The whole child' },
    { id: 'what-to-expect', label: 'What to expect' },
    { id: 'faq', label: 'FAQ' },
  ],
  'services-booking': [
    { id: 'visits', label: 'Your visits' },
    { id: 'care-options', label: 'Care options' },
    { id: 'booking', label: 'Book online' },
  ],
  'about-us': [
    { id: 'dr-ashley', label: 'Dr. Ashley Felak' },
    { id: 'dr-haven', label: 'Dr. Haven Wood' },
  ],
};

@Component({
  selector: 'app-root',
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly menuOpen = signal(false);
  readonly currentPage = signal('');

  sectionsFor(page: string): PageSection[] {
    return this.currentPage() === page ? PAGE_SECTIONS[page] ?? [] : [];
  }

  goToSection(event: Event, id: string): void {
    event.preventDefault();
    this.closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  constructor() {
    const router = inject(Router);
    const meta = inject(Meta);
    const document = inject(DOCUMENT);
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        let route = router.routerState.snapshot.root;
        while (route.firstChild) route = route.firstChild;
        const description = route.data['description'];
        const canonicalUrl = route.data['canonicalUrl'];
        const title = route.title;
        if (description) {
          meta.updateTag({ name: 'description', content: description });
          meta.updateTag({ property: 'og:description', content: description });
        }
        if (title) meta.updateTag({ property: 'og:title', content: title });
        if (canonicalUrl) {
          const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
          if (canonical) canonical.href = canonicalUrl;
          else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = canonicalUrl;
            document.head.appendChild(link);
          }
          meta.updateTag({ property: 'og:url', content: canonicalUrl });
        }
        let structuredData = document.getElementById('juniper-structured-data') as HTMLScriptElement | null;
        if (!structuredData) {
          structuredData = document.createElement('script');
          structuredData.id = 'juniper-structured-data';
          structuredData.type = 'application/ld+json';
          document.head.appendChild(structuredData);
        }
        structuredData.textContent = JSON.stringify(createStructuredData());
        this.currentPage.set(route.url[0]?.path ?? '');
        const fragment = route.fragment;
        if (document.defaultView) {
          if (fragment) {
            setTimeout(() => {
              const target = document.getElementById(fragment);
              if (target && typeof target.scrollIntoView === 'function') {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
          } else {
            const pageContent = document.querySelector<HTMLElement>('.page-content');
            if (pageContent && typeof pageContent.scrollTo === 'function') {
              pageContent.scrollTo({ top: 0, behavior: 'instant' });
            }
          }
        }
      });
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
