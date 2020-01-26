import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdaysPage } from './bdays.page';

const routes: Routes = [
  {
    path: '',
    component: BdaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BdaysPageRoutingModule {}
