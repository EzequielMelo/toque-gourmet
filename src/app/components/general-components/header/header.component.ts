import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProgresiveImageHeaderComponent } from '../progresive-image-header/progresive-image-header.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ProgresiveImageHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() image!: string;
  @Input() blurImage!: string;
  @Input() title!: string;
  @Input() height: string = '50%';
  @Input() alt!: string;
}
