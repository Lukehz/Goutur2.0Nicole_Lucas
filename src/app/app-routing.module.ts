import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mirasol',
    loadChildren: () => import('./mirasol/mirasol.module').then( m => m.MirasolPageModule)
  },
  {
    path: 'lintz',
    loadChildren: () => import('./lintz/lintz.module').then( m => m.LintzPageModule)
  },
  {
    path: 'egana',
    loadChildren: () => import('./egana/egana.module').then( m => m.EganaPageModule)
  },
  {
    path: 'pelluco',
    loadChildren: () => import('./pelluco/pelluco.module').then( m => m.PellucoPageModule)
  },
  {
    path: 'hospital',
    loadChildren: () => import('./hospital/hospital.module').then( m => m.HospitalPageModule)
  },
  { 
    path: 'lagunitas',
    loadChildren: () => import('./lagunitas/lagunitas.module').then( m => m.LagunitasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
