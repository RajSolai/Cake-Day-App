import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'addbday',
    loadChildren: () => import('./allbday/addbday.module').then( m => m.AddbdayPageModule)
  },
  {
    path: 'bdays',
    loadChildren: () => import('./addbdays/bdays.module').then( m => m.BdaysPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./reset/reset.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
