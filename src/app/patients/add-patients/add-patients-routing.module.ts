import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPatientsComponent } from './add-patients.component';

const routes: Routes = [{ path: '', component: AddPatientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPatientsRoutingModule { }
