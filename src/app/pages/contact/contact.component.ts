import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder); // ✅ Inyectamos FormBuilder antes de usarlo

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

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      // Aquí iría el servicio para enviar los datos
      // this.contactService.sendContactForm(this.contactForm.value).subscribe(...);
    }
  }
}