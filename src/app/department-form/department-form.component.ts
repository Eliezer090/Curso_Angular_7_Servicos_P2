import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  depName="";
  constructor(private depService:DepartmentService) { }

  ngOnInit(): void {
  }
  save(){
    this.depService.addDepartment({
      name: this.depName
    });
    this.clear();
  }
  clear(){
    this.depName="";
  }
}
