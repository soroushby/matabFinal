import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadPatientsRoutingModule } from './load-patients-routing.module';
import { LoadPatientsComponent } from './load-patients.component';


@NgModule({
  declarations: [LoadPatientsComponent],
  imports: [
    CommonModule,
    LoadPatientsRoutingModule
  ]
})
export class LoadPatientsModule { }
