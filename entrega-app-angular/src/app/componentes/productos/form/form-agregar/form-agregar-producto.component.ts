import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-form-agregar-producto',
  templateUrl: './form-agregar-producto.component.html',
  styleUrls: ['./form-agregar-producto.component.css']
})
export class FormAgregarProductoComponent {
  nombreProducto = "";
  proveedor = "";
  categoria = "";
  imagen = "";
  descripcion = "";
  precio = "";
  constructor(
    private serviceProduct: ProductosService,
    private route: Router) { }

  enviar() {
    let idNuevo = this.serviceProduct.get().length;
    let productoAdd = {
      id: idNuevo + 2,
      nameProducto: this.nombreProducto,
      imagen: this.imagen,
      proveedor: this.proveedor,
      categoria: this.categoria,
      descripcion: this.descripcion,
      precio: this.precio,
    }
    this.serviceProduct.post(productoAdd);
    this.route.navigate(['/', 'productos'])
  }
}
