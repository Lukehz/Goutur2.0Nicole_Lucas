import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PellucoPageRoutingModule } from './pelluco-routing.module';

import { PellucoPage } from './pelluco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PellucoPageRoutingModule
  ],
  declarations: [PellucoPage]
})
export class PellucoPageModule {}
