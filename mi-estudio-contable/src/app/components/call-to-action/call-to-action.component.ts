import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {
  @Input() title: string = '¿Listo para optimizar tus finanzas?';
  @Input() description: string = 'Contáctanos hoy mismo y descubre cómo podemos ayudar a tu negocio';
  @Input() buttonText: string = 'Solicitar Asesoría';
  @Input() buttonLink: string = '/contacto';
  @Input() variant: 'primary' | 'secondary' | 'light' = 'primary';
  @Input() hasWhatsApp: boolean = true;
  @Input() phoneNumber: string = '+51987654321';
}