import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css',
})
export class WhatsappComponent {
  @Input() phoneNumber: string = '5491122803583';

  showChat: boolean = false; // Controla la visibilidad de la ventana de chat

  toggleChat() {
    this.showChat = !this.showChat;
  }

  openWhatsApp() {
    const whatsappUrl = `https://wa.me/${this.phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.whatsapp-button') &&
      !target.closest('.whatsapp-chat')
    ) {
      this.showChat = false;
    }
  }
}
