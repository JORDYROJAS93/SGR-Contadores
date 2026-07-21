import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string; // Clase de Font Awesome u otro icono
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
  {
    title: 'Contabilidad Integral',
    description: 'Llevamos tu contabilidad al día con precisión y cumplimiento normativo, para que tú solo te enfoques en crecer.',
    icon: 'fas fa-book'
  },
  {
    title: 'Asesoría Fiscal',
    description: 'Optimizamos tu carga tributaria y aseguramos el cumplimiento ante la SUNAT con estrategias claras y legales.',
    icon: 'fas fa-balance-scale'
  },
  {
    title: 'Planillas y RRHH',
    description: 'Gestionamos tus planillas con exactitud, cumpliendo con leyes laborales y evitando multas.',
    icon: 'fas fa-file-invoice-dollar'
  },
  {
    title: 'Constitución de Empresas',
    description: 'Te ayudamos a formalizar tu negocio desde cero: trámites, RUC, contabilidad inicial y más.',
    icon: 'fas fa-building'
  },
  {
    title: 'Declaraciones Juradas',
    description: 'Presentamos tus declaraciones mensuales y anuales con puntualidad y máxima precisión.',
    icon: 'fas fa-clipboard-check'
  },
  {
    title: 'Asesoría Laboral',
    description: 'Evita conflictos y multas con asesoría actualizada en leyes de trabajo y contratos.',
    icon: 'fas fa-user-tie'
  }
];

  solicitarServicio(service: Service) {
    // Puedes personalizar el número y el mensaje
    window.open(
      `https://wa.me/51910363961?text=Hola, deseo información sobre el servicio: ${encodeURIComponent(service.title)}`,
      '_blank'
    );
  }

}