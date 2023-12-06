import { Component } from '@angular/core';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
   phoneNumber = '+919518312166';

  // Generate the WhatsApp link without a pre-filled message
  get whatsappLink(): string {
    return `https://api.whatsapp.com/send?phone=${this.phoneNumber}`;
  }
}
