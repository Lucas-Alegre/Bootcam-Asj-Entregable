import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any = []
  listadoProveedores:any=[];

  constructor(private servicesProducto: ProductosService,
    private route: Router) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos() {
    this.servicesProducto.get().subscribe((data) => {
      this.productos = data
    });
  }

  getProveedores(){
    
  }

  eliminar(product: any) {
    this.servicesProducto.delete(product.id).subscribe(res=>{
      this.getProductos()
    })
  }
}
