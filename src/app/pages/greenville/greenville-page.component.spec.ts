import { TestBed } from '@angular/core/testing';
import { GreenvillePageComponent } from './greenville-page.component';

describe('GreenvillePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenvillePageComponent],
    }).compileComponents();
  });

  it('should render the letter and records-release download link', () => {
    const fixture = TestBed.createComponent(GreenvillePageComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent?.trim()).toBe('A Letter to Our Greenville Patients');
    expect(element.textContent).toContain('Our last day seeing patients will be January 15, 2027.');
    expect(element.querySelectorAll('.provider-list li')).toHaveLength(5);
    expect(element.textContent).toContain('A Personal Thank You from Dr. Ashley');

    const downloadLink = element.querySelector('.download-link') as HTMLAnchorElement | null;
    expect(downloadLink?.getAttribute('href')).toBe('/assets/images/recordsrelease.pdf');
    expect(downloadLink?.getAttribute('download')).toBe('recordsrelease.pdf');
  });
});
