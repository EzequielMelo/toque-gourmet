import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToContact() {
    const currentRoute = this.router.url.split('#')[0]; // Obtiene la ruta actual sin el fragmento

    if (currentRoute === '/faqs') {
      this.router.navigate(['/inicio'], { fragment: 'seccion-contacto' });
    } else {
      // Si estás en cualquier otra página, desplázate a la sección de contacto
      const element = document.getElementById('seccion-contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
