import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <main>
    <router-outlet></router-outlet>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
