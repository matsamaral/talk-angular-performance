import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnDemandPreloadStrategy } from './core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
    // O código abaixo quando adicionado é feito o préload do módulo mesmo que o usuário não passe o mouse sobre o link
    data: { preload: true }
  },
  {
    path: 'observable',
    loadChildren: () => import('./pages/observables/observables.module').then(mod => mod.ObservablesModule)
    // O código abaixo quando adicionado é feito o préload do módulo mesmo que o usuário não passe o mouse sobre o link
    // data: { preload: true }
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pages/pipes/pipes.module').then(mod => mod.PipesModule)
    // O código abaixo quando adicionado é feito o préload do módulo mesmo que o usuário não passe o mouse sobre o link
    // data: { preload: true }
  },
  {
    path: 'credits',
    loadChildren: () => import('./pages/credits/credits.module').then(mod => mod.CreditsModule)
    // O código abaixo quando adicionado é feito o préload do módulo mesmo que o usuário não passe o mouse sobre o link
    // data: { preload: true }
  },
  {
    path: '***',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: OnDemandPreloadStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
