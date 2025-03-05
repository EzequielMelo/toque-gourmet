import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-category',
  imports: [],
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css',
})
export class ServiceCategoryComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
}
