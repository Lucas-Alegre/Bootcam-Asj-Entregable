import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private servicesProducto: ProductosService,
    private route: Router) { }
  productos = this.servicesProducto.get();

  
  eliminar(product: any) {
    this.productos = this.servicesProducto.delete(product)
  }
}
