import { Routes } from '@angular/router';
import { EmbedReportComponent } from './embed-report/embed-report.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: EmbedReportComponent },
  { path: 'todoapp', component: HomeComponent },
];
