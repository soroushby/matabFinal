import { Patient } from './../../interfaces/patients';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.scss'],
})
export class AddPatientsComponent implements OnInit {
  constructor(private fb: FormBuilder, private dataService: DataService) {}
  patientsForm: FormGroup;
  parities = [
    { name: 'G' },
    { name: 'P' },
    { name: 'Ab' },
    { name: 'L' },
    { name: 'D' },
  ];
  ngOnInit(): void {
    this.patientsForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      number: ['', Validators.required],
      parity: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onAddPatients() {
    this.dataService.addPatients(
      this.patientsForm.get('name').value,
      this.patientsForm.get('age').value,
      this.patientsForm.get('number').value,
      this.patientsForm.get('parity').value,
      this.patientsForm.get('date').value
    );
  }
}
