import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

import { GridApi } from 'ag-grid-community';
import { Patient } from 'src/app/interfaces/patients';

@Component({
  selector: 'app-load-patients',
  templateUrl: './load-patients.component.html',
  styleUrls: ['./load-patients.component.scss'],
})
export class LoadPatientsComponent implements OnInit {
  patient$: Observable<Patient[]>;

  patients;
  gridApi;
  gApi;
  columnApi;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.patient$ = this.dataService.getPatients();
  }

  columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      width: 600,
    },
    {
      headerName: 'Age',
      field: 'age',
      sortable: true,
      filter: true,
    },
    { headerName: 'Number', field: 'number', sortable: true, filter: true },
    { headerName: 'Parity', field: 'parity', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { headerName: 'Id', field: 'id', sortable: true, filter: true },
  ];

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;

    api.sizeColumnsToFit();
  }

  selectAll() {
    this.gridApi.selectAll();
    // this.patients$.subscribe((data) => data.name);
  }

  deSelectAll() {
    this.gridApi.deselectAll();
  }

  // onDeletePatients(id) {
  //   this.patientsService.deletePatient(id);
  // }
}
