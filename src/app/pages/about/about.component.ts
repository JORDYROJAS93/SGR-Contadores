import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  team: TeamMember[] = [
    {
      name: 'Dany Rojas',
      role: 'Contador Público',
      bio: 'Experto en asesoría fiscal y contabilidad integral. Cuenta con más de 10 años de experiencia en el sector.',
      image: '/assets/images_nosotros/DenisRojas.jpg'
    },
    {
      name: 'Delsy Rojas',
      role: 'Especialista Laboral',
      bio: 'Responsable del área laboral y planillas. Ayuda a las empresas a cumplir con la normativa vigente.',
      image: '/assets/images_nosotros/DelsyRojas.jpg'
    },
    {
      name: 'Fiorella Rojas',
      role: 'Consultor Empresarial',
      bio: 'Ayuda a los clientes a tomar decisiones informadas basadas en análisis financiero y estrategias tributarias.',
      image: '/assets/images_nosotros/FiorellaRojas.jpg'
    }
  ];

  values: Value[] = [
    {
      title: 'Confianza',
      description: 'Trabajamos con transparencia y ética profesional en cada relación con nuestros clientes.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Experiencia',
      description: 'Más de 10 años ayudando a PYMES a crecer con bases sólidas y cumplimiento legal.',
      icon: 'fas fa-briefcase'
    },
    {
      title: 'Servicio Personalizado',
      description: 'Cada cliente es único, por eso ofrecemos soluciones adaptadas a tus necesidades específicas.',
      icon: 'fas fa-handshake'
    }
  ];
}