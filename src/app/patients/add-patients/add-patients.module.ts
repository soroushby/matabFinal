import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPatientsRoutingModule } from './add-patients-routing.module';
import { AddPatientsComponent } from './add-patients.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPatientsComponent],
  imports: [
    CommonModule,
    AddPatientsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class AddPatientsModule {}
