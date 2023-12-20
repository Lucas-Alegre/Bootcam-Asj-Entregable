import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';


@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent {
  nombreProducto = "";
  proveedor = "";
  categoria = "";
  imagen = "";
  descripcion = "";
  precio = "";
  constructor(
    private serviceProduct: ProductosService,
    private route: Router,
    private _activateRoute: ActivatedRoute) { }

  enviar() {
    let idNuevo = this._activateRoute.snapshot.paramMap.get('id');
    let productoAdd = {
      id: idNuevo,
      nameProducto: this.nombreProducto,
      imagen: this.imagen,
      proveedor: this.proveedor,
      categoria: this.categoria,
      descripcion: this.descripcion,
      precio: this.precio,
    }
    console.log(this.serviceProduct.put(productoAdd));
    this.route.navigate(['/', 'productos'])
  }
}
