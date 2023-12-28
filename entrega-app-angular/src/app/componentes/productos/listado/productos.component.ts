import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any = []
  productos2: any = []
  listadoProveedores: any = []
  listadoNombreApellidoProveedores: any = []

  constructor(private servicesProducto: ProductosService,) { }

  ngOnInit(): void {
    this.getProductos()
  }


  getProductos() {
    this.servicesProducto.get().subscribe((data) => {
      this.productos = data
      this.productos.sort(this.sortFunc)
    });
  }

  sortFunc(a: any, b: any) {
    if (a.nameProducto < b.nameProducto) {
      return -1;
    }
    if (a.nameProducto > b.nameProducto) {
      return 1;
    }
    return 0;
  }


  eliminar(product: any) {
    this.servicesProducto.delete(product.id).subscribe(res => {
      this.getProductos()
    })
  }
}
