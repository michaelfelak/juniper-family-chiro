import { Component, signal, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly menuOpen = signal(false);

  constructor() {
    inject(Router).events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        document.querySelector('.page-content')?.scrollTo({ top: 0, behavior: 'instant' });
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
