import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-embed-report',
  standalone: true,
  imports: [CommonModule],
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
