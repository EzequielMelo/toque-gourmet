import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    initFlowbite();
  }

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
