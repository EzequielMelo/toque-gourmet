import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresive-image',
  imports: [CommonModule],
  templateUrl: './progresive-image.component.html',
  styleUrl: './progresive-image.component.css',
})
export class ProgresiveImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlSmall!: string;

  loaded = false;

  onLoad() {
    this.loaded = true;
  }
}
