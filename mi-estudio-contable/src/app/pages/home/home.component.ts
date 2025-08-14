import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { TestimonialSliderComponent } from '../../components/testimonial-slider/testimonial-slider.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, TestimonialSliderComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredServices = [
    {
      title: 'Asesoría Fiscal',
      description: 'Optimización de impuestos y cumplimiento normativo para PYMES',
      icon: 'fas fa-file-invoice-dollar'
    },
    {
      title: 'Contabilidad Integral',
      description: 'Gestión contable completa para tu empresa',
      icon: 'fas fa-calculator'
    },
    {
      title: 'Constitución de Empresas',
      description: 'Te acompañamos en la formalización de tu negocio',
      icon: 'fas fa-building'
    }
  ];

  testimonials = [
    {
      quote: 'SGR nos ha ayudado a organizar nuestra contabilidad y reducir nuestros impuestos de manera legal.',
      author: 'Juan Pérez',
      position: 'Dueño, Restaurante Sabores Peruanos'
    },
    {
      quote: 'Excelente servicio y atención personalizada. Siempre están disponibles para resolver nuestras dudas.',
      author: 'María Rodríguez',
      position: 'Gerente, Tienda de Ropa Moda Perú'
    }
  ];
}