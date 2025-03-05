import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-category-reverse',
  imports: [],
  templateUrl: './service-category-reverse.component.html',
  styleUrl: './service-category-reverse.component.css',
})
export class ServiceCategoryReverseComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
}
