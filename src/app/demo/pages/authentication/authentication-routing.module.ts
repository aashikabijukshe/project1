import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     // {
  //     //   path: 'login',
  //     //   loadComponent: () => import('./login/login.component')
  //     // },
  //     // {
  //     //   path: 'register',
  //     //   loadComponent: () => import('./register/register.component')
  //     // },
  //     // {
  //     //   path: '',
  //     //   redirectTo: '/auth/login',
  //     //   pathMatch: 'full'
  //     // }

  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
