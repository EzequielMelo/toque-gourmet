import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/home-components/carousel/carousel.component";
import { CardComponent } from "../../components/home-components/card/card.component";
import { ContactComponent } from "../../components/general-components/contact/contact.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardComponent, ContactComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
