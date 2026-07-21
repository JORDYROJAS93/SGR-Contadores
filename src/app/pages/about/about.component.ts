import { Component } from '@angular/core';

// 👇 Importa lo necesario
import { CommonModule } from '@angular/common';

interface TeamMember {
  nombre: string;
  rol: string;
  biografia: string;
  image: string;
  visible?: boolean;
  linkedin?: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule  // ← Obligatorio para @for, @if, etc.
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  team: TeamMember[] = [
    {
      nombre: 'Dany Rojas',
      rol: 'Contador Público',
      biografia: 'Experto en asesoría fiscal y contabilidad integral. Cuenta con más de 10 años de experiencia en el sector.',
      image: 'assets/images_nosotros/Denis.jpg',
      visible: true,
      linkedin:'',
    },
    {
      nombre: 'Delsy Rojas',
      rol: 'Especialista Laboral',
      biografia: 'Responsable del área laboral y planillas. Ayuda a las empresas a cumplir con la normativa vigente.',
      image: 'assets/images_nosotros/Delsy.jpg',
      visible: true,
      linkedin:'',
    },
    {
      nombre: 'Fiorella Rojas',
      rol: 'Consultor Empresarial',
      biografia: 'Ayuda a los clientes a tomar decisiones informadas basadas en análisis financiero y estrategias tributarias.',
      image: 'assets/images_nosotros/Fiorella.jpg',
      visible: true,
      linkedin:'',
    }
  ];

  values: Value[] = [
    {
      title: 'Confianza',
      description: 'Trabajamos con transparencia y ética profesional en cada relación con nuestros clientes.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Conocimiento',
      description: 'Actualizados en las mejores estrategias para apoyar a PYMES a crecer con bases sólidas y cumplimiento legal.',
      icon: 'fas fa-atom'
    }
    ,
    {
      title: 'Servicio Personalizado',
      description: 'Cada cliente es único, por eso ofrecemos soluciones adaptadas a tus necesidades específicas.',
      icon: 'fas fa-handshake'
    }
  ];
}