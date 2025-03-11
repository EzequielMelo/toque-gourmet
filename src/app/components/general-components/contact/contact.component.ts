import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../environments/environment.development';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor(private route: ActivatedRoute) {
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
      from_name: [
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

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    });
  }

  sendContactInfo() {
    if (this.contactForm.invalid) {
      console.log('Error en el fomulario');
      this.contactForm.markAllAsTouched();
      return;
    }

    const templateParams = {
      from_name: this.contactForm.value.from_name,
      company: this.contactForm.value.company,
      phone: this.contactForm.value.phone,
      email: this.contactForm.value.email,
      message: this.contactForm.value.textarea,
    };

    emailjs
      .send(
        environment.emailJsConfig.serviceId,
        environment.emailJsConfig.templateId,
        templateParams,
        environment.emailJsConfig.publicKey
      )
      .then(
        (response) => {
          console.log('Correo enviado con éxito!', response);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
          });
          Toast.fire({
            icon: 'success',
            title: 'Mensaje enviado con exito',
          });
          this.contactForm.reset();
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
          });
          Toast.fire({
            icon: 'error',
            title: 'Hubo un error al enviar el mensaje, intente nuevamente',
          });
        }
      );
  }
}
