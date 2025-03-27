import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  phoneNumber: string = '5491122803583';

  openWhatsApp() {
    const whatsappUrl = `https://wa.me/${this.phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }
}
