import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/general-components/navbar/navbar.component';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './components/general-components/footer/footer.component';
import { WhatsappComponent } from './components/general-components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'toque-gourmet';

  ngOnInit(): void {
    initFlowbite();
  }
}
