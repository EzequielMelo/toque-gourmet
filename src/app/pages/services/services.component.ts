import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/general-components/header/header.component';
import { ServiceCategoryComponent } from '../../components/services-components/service-category/service-category.component';
import { ServiceCategoryReverseComponent } from '../../components/services-components/service-category-reverse/service-category-reverse.component';
import { ContactComponent } from '../../components/general-components/contact/contact.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [
    HeaderComponent,
    ServiceCategoryComponent,
    ServiceCategoryReverseComponent,
    ContactComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          const offset = 100; // Ajusta este valor según la altura de tu navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  }
}
