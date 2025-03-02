import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
      }
    ]
  },

  
  {
    path: '',
    component: AdminComponent,
    
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      
      {
        path: 'default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then(m => m.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: 'act-list-setup',  //  Move outside "AdminComponent"
    loadComponent: () => import('./main-setup-menu/act-list-setup/act-list-setup.component')
      .then(m => m.ActListSetupComponent)
  },
  {
    path: 'agency-type-setup',
    loadComponent: () => import('./main-setup-menu/agency-type-setup/agency-type-setup.component')
    .then(m => m.AgencyTypeSetupComponent)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
