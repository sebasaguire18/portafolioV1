import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  // la pagina de inicio al cargar la ruta
  { path: '', component: PortafolioComponent},
  { path: 'portafolio', component : PortafolioComponent},
  { path: 'about', component : AboutComponent},
  { path: 'item', component : ItemComponent},
  // cuando falla la ruta
  { path: '**', component: PortafolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
