import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pediatrics-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pediatrics-page.component.html',
  styleUrl: './pediatrics-page.component.scss'
})
export class PediatricsPageComponent {
  readonly bookingUrl = 'https://juniperfamilychiro.janeapp.com';
}
