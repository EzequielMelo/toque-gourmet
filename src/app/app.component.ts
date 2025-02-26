import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/general-components/navbar/navbar.component';
import 'flowbite';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './components/general-components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'toque-gourmet';

  ngOnInit(): void {
    initFlowbite();
  }
}
