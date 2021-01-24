import { Injectable } from '@angular/core';
import { Department } from '../Models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departments: Department[] = [
    { id: 1, name: "Vestuario" },
    { id: 2, name: "BOOKS" },
    { id: 3, name: "Eletronicos" },
    { id: 4, name: "Compiuters" }
  ];

  private nextId: number = 5;

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }
  addDepartment(d: Department) {
    this.departments.push({ ...d, id: this.nextId++ });
  }

  getDepartmentById(id: number): Department[] {
    return [this.departments.find((d) => d.id == id)!];
  }

  trnasform(dep:Department[]): Department[]{
 
    return dep;
  }
}
