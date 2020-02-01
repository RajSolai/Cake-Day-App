import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbdayPage } from './addbday.page';

const routes: Routes = [
  {
    path: '',
    component: AddbdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbdayPageRoutingModule {}
