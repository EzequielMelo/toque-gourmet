import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/home-components/carousel/carousel.component";
import { CardComponent } from "../../components/home-components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
