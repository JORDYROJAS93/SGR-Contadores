import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importante para enviar peticiones

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    business: [''],
    service: ['', Validators.required],
    message: ['', Validators.required]
  });

  services = [
    'Asesoría Fiscal',
    'Contabilidad',
    'Planilla y Asesoría Laboral',
    'Constitución de Empresas',
    'Otro'
  ];

  submitted = false;
  isSubmitting = false;
  isSuccess = false;

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Reemplaza esta URL con la que te proporcione Formspree al registrarte gratis
      const formspreeUrl = 'https://formspree.io/f/xkodzvjb'; 

      this.http.post(formspreeUrl, this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.isSuccess = true;
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          this.isSubmitting = false;
          alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.');
          console.error('Error:', error);
        }
      });
    }
  }

  get whatsAppLink(): string {
    const cleanedNumber = '+51910363961'.replace(/\D/g, '');
    return `https://wa.me/${cleanedNumber}`;
  }
}