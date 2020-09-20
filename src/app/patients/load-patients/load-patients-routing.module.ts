import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadPatientsComponent } from './load-patients.component';

const routes: Routes = [{ path: '', component: LoadPatientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadPatientsRoutingModule { }
