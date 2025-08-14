import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  services = [
    { name: 'Contabilidad Integral', link: '/servicios/contabilidad' },
    { name: 'Asesoría Fiscal', link: '/servicios/asesoria-fiscal' },
    { name: 'Planillas', link: '/servicios/planillas' },
    { name: 'Constitución de Empresas', link: '/servicios/constitucion-empresas' }
  ];

  quickLinks = [
    { name: 'Inicio', link: '/' },
    { name: 'Nosotros', link: '/nosotros' },
    { name: 'Servicios', link: '/servicios' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contacto', link: '/contacto' }
  ];

  contactInfo = {
    address: 'Av. Principal 123, Puente Piedra, Lima, Perú',
    phone: '(01) 123-4567',
    mobile: '+51 987 654 321',
    email: 'info@sgrcontadores.com',
    businessHours: 'Lunes a Viernes: 9:00 am - 6:00 pm'
  };

  get whatsAppLink(): string {
    const cleanedNumber = this.contactInfo.mobile.replace(/\D/g, '');
    return `https://wa.me/ ${cleanedNumber}`;
  }
}