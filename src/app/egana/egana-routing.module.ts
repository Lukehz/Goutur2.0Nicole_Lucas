import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EganaPage } from './egana.page';

const routes: Routes = [
  {
    path: '',
    component: EganaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EganaPageRoutingModule {}
