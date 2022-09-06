import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PellucoPage } from './pelluco.page';

const routes: Routes = [
  {
    path: '',
    component: PellucoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PellucoPageRoutingModule {}
