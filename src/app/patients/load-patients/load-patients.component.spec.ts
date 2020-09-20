import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPatientsComponent } from './load-patients.component';

describe('LoadPatientsComponent', () => {
  let component: LoadPatientsComponent;
  let fixture: ComponentFixture<LoadPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
