import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LagunitasPageRoutingModule } from './lagunitas-routing.module';

import { LagunitasPage } from './lagunitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LagunitasPageRoutingModule
  ],
  declarations: [LagunitasPage]
})
export class LagunitasPageModule {}
