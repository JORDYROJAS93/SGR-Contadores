import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string; // Clase de Font Awesome u otro icono
  image: string; // Ruta de la imagen del servicio (opcional)
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Asesoría Fiscal',
      description: 'Optimización de impuestos y cumplimiento normativo para PYMES.',
      icon: 'fas fa-file-invoice-dollar',
      image: '/assets/images_servicios/AsesoriaFiscal.jpeg' // Ruta de la imagen del servicio
    },
    {
      title: 'Contabilidad Integral',
      description: 'Gestión contable completa para tu empresa.',
      icon: 'fas fa-calculator',
      image: '/assets/images_servicios/AsesoriaFiscal.jpeg' // Ruta de la imagen del servicio
    },
    {
      title: 'Planilla y Asesoría Laboral',
      description: 'Administración de planillas y cumplimiento laboral.',
      icon: 'fas fa-users-cog',
     image: '/assets/images_servicios/AsesoriaFiscal.jpeg'
    },
    {
      title: 'Constitución de Empresas',
      description: 'Te acompañamos en la formalización de tu negocio.',
      icon: 'fas fa-building',
      image: '/assets/images_servicios/AsesoriaFiscal.jpeg'
    },
    {
      title: 'Auditoría y Control Interno',
      description: 'Evaluación de procesos financieros y control interno.',
      icon: 'fas fa-balance-scale',
      image: '/assets/images_servicios/AsesoriaFiscal.jpeg'
    },
    {
      title: 'Declaraciones Juradas',
      description: 'Preparación y presentación de declaraciones ante SUNAT.',
      icon: 'fas fa-clipboard-list',
      image: '/assets/images_servicios/AsesoriaFiscal.jpeg'
    },
    {
      title: 'Declaraciones Juradas',
      description: 'Preparación y presentación de declaraciones ante SUNAT.',
      icon: 'fas fa-clipboard-list',
      image: '/assets/images_servicios/AsesoriaFiscal.jpeg'
    }
  ];

  solicitarServicio(service: Service) {
    // Puedes personalizar el número y el mensaje
    window.open(
      `https://wa.me/51999999999?text=Hola, deseo información sobre el servicio: ${encodeURIComponent(service.title)}`,
      '_blank'
    );
  }

}