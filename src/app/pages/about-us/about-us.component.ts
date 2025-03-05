import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/general-components/header/header.component';
import { SeparatorComponent } from "../../components/about-us-components/separator/separator.component";

@Component({
  selector: 'app-about-us',
  imports: [HeaderComponent, SeparatorComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
