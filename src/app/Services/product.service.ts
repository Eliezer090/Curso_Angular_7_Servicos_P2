import { EventEmitter, Injectable } from '@angular/core';
import { Department } from '../Models/department.model';
import { Product } from '../Models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[]=[
    { id: 1, name:"Laptop", department_id:4, price: 40, description:"laptop"},
    { id: 2, name:"product2", department_id:1, price: 10, description:"desc2"},
    { id: 3, name:"product3", department_id:1, price: 50, description:"desc3"},
    { id: 4, name:"product4", department_id:3, price: 40, description:"desc4"},
  ]

  products:Product[]=[];
  private nextID: number=0;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private departmentService: DepartmentService) { 
    for (let p of this.dataFromServer) {
      this.products.push({
        id:p.id,
        name: p.name,
        description:p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      })
      this.nextID= p.id+1;
    }
  }

  getproduct():Product[]{
    return this.products;
  }

  addProduct(p:Product){
    let prod: Product={...p,id: this.nextID++,department: p.department};
    this.products.push(prod);
    this.onNewProduct.emit(prod);
    
  }
  
}
