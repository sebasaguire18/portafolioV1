import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  // la pagina de inicio al cargar la ruta
  { path: 'home', component : PortafolioComponent},
  { path: 'about', component : AboutComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'search/:termino', component: SearchComponent},
  // cuando falla la ruta
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
