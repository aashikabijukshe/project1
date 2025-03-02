import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActListSetupComponent } from './act-list-setup/act-list-setup.component';

const routes: Routes = [
  {
    path: 'act-list-setup',
    loadComponent: () => import('./act-list-setup/act-list-setup.component').then(m => m.ActListSetupComponent)
  },

  {
    path: 'agency-type-setup', 
    loadComponent: () => import('./agency-type-setup/agency-type-setup.component')
      .then(m => m.AgencyTypeSetupComponent)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainSetupMenuRoutingModule { }


