import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from '../../components/general-components/header/header.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-faqs',
  imports: [HeaderComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initFlowbite();
  }
}
