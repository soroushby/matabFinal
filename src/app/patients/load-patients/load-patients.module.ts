import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadPatientsRoutingModule } from './load-patients-routing.module';
import { LoadPatientsComponent } from './load-patients.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from 'src/app/modules/material/material.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [LoadPatientsComponent],
  imports: [
    CommonModule,
    LoadPatientsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    AgGridModule.withComponents([]),
  ],
})
export class LoadPatientsModule {}
