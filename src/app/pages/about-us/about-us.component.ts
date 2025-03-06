import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/general-components/header/header.component';
import { SeparatorComponent } from "../../components/about-us-components/separator/separator.component";
import { ServiceCategoryComponent } from '../../components/services-components/service-category/service-category.component';
import { ServiceCategoryReverseComponent } from '../../components/services-components/service-category-reverse/service-category-reverse.component';
import { ContactComponent } from "../../components/general-components/contact/contact.component";

@Component({
  selector: 'app-about-us',
  imports: [HeaderComponent, SeparatorComponent, ServiceCategoryComponent, ServiceCategoryReverseComponent, ContactComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
