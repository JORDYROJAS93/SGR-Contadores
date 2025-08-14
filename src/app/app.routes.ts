import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'SGR Contadores' },
  { path: 'servicios', component: ServicesComponent, title: 'Nuestros Servicios Contables' },
  { path: 'nosotros', component: AboutComponent, title: 'Sobre Nosotros' },
  { path: 'contacto', component: ContactComponent, title: 'Contáctanos' },
  { path: '**', redirectTo: '' }
];