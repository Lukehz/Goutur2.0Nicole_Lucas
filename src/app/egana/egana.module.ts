import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EganaPageRoutingModule } from './egana-routing.module';

import { EganaPage } from './egana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EganaPageRoutingModule
  ],
  declarations: [EganaPage]
})
export class EganaPageModule {}
