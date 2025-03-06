import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      company: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      textarea: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(270),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.min(11111111),
          Validators.max(9999999999),
        ],
      ],
    });
  }

  sendContactInfo() {
    if (this.contactForm.invalid) {
      console.error('Formulario no válido, por favor verifica los campos.');
      // Opcionalmente, puedes marcar todos los campos como "tocados" para mostrar los errores
      this.contactForm.markAllAsTouched();
      return; // Salir de la función si el formulario no es válido
    }

    const formValues = this.contactForm.value;

    console.log('Enviando formulario con los siguientes datos:', formValues);
  }
}
