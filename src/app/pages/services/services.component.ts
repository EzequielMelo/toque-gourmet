import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/general-components/header/header.component';
import { ServiceCategoryComponent } from '../../components/services-components/service-category/service-category.component';
import { ServiceCategoryReverseComponent } from '../../components/services-components/service-category-reverse/service-category-reverse.component';

@Component({
  selector: 'app-services',
  imports: [
    HeaderComponent,
    ServiceCategoryComponent,
    ServiceCategoryReverseComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
