import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-embed-report',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './embed-report.component.html',
  styleUrls: ['./embed-report.component.css'],
})
export class EmbedReportComponent {
  isVisible = signal(false);
  theme = signal<'light' | 'dark'>('light');

  toggleReport() {
    this.isVisible.update((v) => !v);
  }

  toggleTheme() {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
  }
}
