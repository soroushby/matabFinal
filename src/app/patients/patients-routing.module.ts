import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';

const routes: Routes = [
  { path: '', component: PatientsComponent },
  {
    path: 'addPatients',
    loadChildren: () =>
      import('./add-patients/add-patients.module').then(
        (m) => m.AddPatientsModule
      ),
  },
  {
    path: 'loadPatients',
    loadChildren: () =>
      import('./load-patients/load-patients.module').then(
        (m) => m.LoadPatientsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
