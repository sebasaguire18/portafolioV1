import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';

const appRoutes: Routes = [
  // la pagina de inicio al cargar la ruta
  { path: '', component: PortafolioComponent},
  { path: 'home', component : PortafolioComponent},
  { path: 'portafolio', component : PortafolioComponent},
  { path: 'about', component : AboutComponent},
  // cuando falla la ruta
  { path: '**', component: PortafolioComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);