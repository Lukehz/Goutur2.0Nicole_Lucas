import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MirasolPage } from './mirasol.page';

const routes: Routes = [
  {
    path: '',
    component: MirasolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MirasolPageRoutingModule {}
