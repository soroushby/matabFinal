import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPatientsRoutingModule } from './add-patients-routing.module';
import { AddPatientsComponent } from './add-patients.component';


@NgModule({
  declarations: [AddPatientsComponent],
  imports: [
    CommonModule,
    AddPatientsRoutingModule
  ]
})
export class AddPatientsModule { }
