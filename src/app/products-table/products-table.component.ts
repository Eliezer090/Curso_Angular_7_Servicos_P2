import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from '../Models/product.model';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  @ViewChild(MatTable)
  datatable!: MatTable<any>;

  products: Product[] = [];
  prodColumns: string[] = ['id', 'name', 'department', 'price', 'description'];

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productsService.getproduct();
    this.productsService.onNewProduct
      .subscribe((p: Product) => {
        this.datatable.renderRows();
      });
  }


}
