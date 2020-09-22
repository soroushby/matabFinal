import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Patient } from '../interfaces/patients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore) {}
  addPatients(name, age, number, parity, date) {
    this.db.collection('patients').add({
      name: name,
      age: age,
      number: number,
      parity: parity,
      date: date,
    });
  }

  getPatients(): Observable<Patient[]> {
    return this.db
      .collection('patients')
      .snapshotChanges()
      .pipe(
        map((data) =>
          data.map(
            (data) =>
              <Patient>{
                id: data.payload.doc.id,
                ...(data.payload.doc.data() as Patient),
              }
          )
        )
      );
  }
}
