import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (c) => c.ServicesComponent
      ),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      ),
  },
  {
    path: 'faqs',
    loadComponent: () =>
      import('./pages/faqs/faqs.component').then((c) => c.FaqsComponent),
  },
];
