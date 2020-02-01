import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BdaysPageRoutingModule } from './bdays-routing.module';

import { BdaysPage } from './bdays.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BdaysPageRoutingModule
  ],
  declarations: [BdaysPage]
})
export class BdaysPageModule {}
