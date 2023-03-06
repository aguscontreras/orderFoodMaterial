import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './modules/menu/pages/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/menu/menu.module').then((m) => m.MenuModule),
  },

  {
    path: 'checkout',
    loadChildren: () =>
      import('./modules/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },

  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },

  { path: '**', component: MainMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
