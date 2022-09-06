import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LintzPage } from './lintz.page';

const routes: Routes = [
  {
    path: '',
    component: LintzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LintzPageRoutingModule {}
