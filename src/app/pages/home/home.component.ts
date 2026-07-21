import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { TestimonialSliderComponent } from '../../components/testimonial-slider/testimonial-slider.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent, TestimonialSliderComponent,CarouselComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredServices = [
  {
    title: 'Contabilidad Integral',
    description: 'Llevamos tus libros al día con cumplimiento normativo y reportes claros.',
    icon: 'fas fa-book'
  },
  {
    title: 'Asesoría Fiscal',
    description: 'Optimización tributaria y presentación de declaraciones ante la SUNAT.',
    icon: 'fas fa-balance-scale'
  },
  {
    title: 'Gestión de Planillas',
    description: 'Cálculo preciso de remuneraciones, beneficios y cumplimiento laboral.',
    icon: 'fas fa-file-invoice-dollar'
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