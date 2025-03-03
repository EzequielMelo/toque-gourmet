import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/home-components/carousel/carousel.component";
import { CardComponent } from "../../components/home-components/card/card.component";
import { ContactComponent } from "../../components/general-components/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
