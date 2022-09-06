import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LintzPageRoutingModule } from './lintz-routing.module';

import { LintzPage } from './lintz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LintzPageRoutingModule
  ],
  declarations: [LintzPage]
})
export class LintzPageModule {}
