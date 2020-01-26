import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbdayPageRoutingModule } from './addbday-routing.module';

import { AddbdayPage } from './addbday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbdayPageRoutingModule
  ],
  declarations: [AddbdayPage]
})
export class AddbdayPageModule {}
