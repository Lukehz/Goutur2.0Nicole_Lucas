import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LagunitasPage } from './lagunitas.page';

const routes: Routes = [
  {
    path: '',
    component: LagunitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LagunitasPageRoutingModule {}
