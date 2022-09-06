import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MirasolPageRoutingModule } from './mirasol-routing.module';

import { MirasolPage } from './mirasol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MirasolPageRoutingModule
  ],
  declarations: [MirasolPage]
})
export class MirasolPageModule {}
