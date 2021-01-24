import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Services/department.service';
import {Department} from '../Models/department.model'
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name:string="";
  department=[] as any;
  price:number=0;
  description:string="";
  departments:Department[]=[];

  constructor(
    private depService:DepartmentService,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.departments = this.depService.getDepartments();
  }
  save(){
    this.productService.addProduct({
      name:this.name,
      price:this.price,
      department:[this.department],
      description:this.description
      });
      this.clear();
  }
  clear(){
    this.name = '';
    this.description="";
    this.price=0;
    this.department=[];
  }
}
