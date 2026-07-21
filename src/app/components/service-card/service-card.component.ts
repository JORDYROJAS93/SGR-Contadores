import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 👇 Define la interfaz aquí
interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})




export class ServiceCardComponent {

  @Input() service!: Service;

  hovered = false;
 

onDetails() {
  alert(`Detalles de: ${this.service.title}`);
}


}