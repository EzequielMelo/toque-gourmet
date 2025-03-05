import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-separator',
  imports: [CommonModule],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.css'
})
export class SeparatorComponent {
  @Input() image!: string;
  @Input() height: string = '50%';
}
