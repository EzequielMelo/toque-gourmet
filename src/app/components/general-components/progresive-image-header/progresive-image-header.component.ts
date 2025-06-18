import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresive-image-header',
  imports: [CommonModule],
  templateUrl: './progresive-image-header.component.html',
  styleUrl: './progresive-image-header.component.css',
})
export class ProgresiveImageHeaderComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlSmall!: string;
  @Input({ required: true }) height!: string;
  @Input({ required: true }) alt!: string;

  loaded = false;

  onLoad() {
    this.loaded = true;
  }
}
