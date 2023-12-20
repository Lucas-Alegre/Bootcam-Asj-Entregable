import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';

@Component({
  selector: 'app-form-agregar-orden-compra',
  templateUrl: './form-agregar-orden-compra.component.html',
  styleUrls: ['./form-agregar-orden-compra.component.css']
})
export class FormAgregarOrdenCompraComponent {
  fechaEntrega = "";
  direccion = "";
  proveedor = "";
  producto = "";
  cantidad = 0;
  total = 0;

  constructor(
    private serviceOrdenCompra: OrdenCompraService,
    private route: Router) { }

  enviar() {
    let idNuevo = this.serviceOrdenCompra.get().length;
    let ordenAdd = {
      id: idNuevo + 2,
      fechaEntrega: this.fechaEntrega,
      direccion: this.direccion,
      proveedor: this.proveedor,
      producto: this.producto,
      cantidad: this.cantidad,
      total: this.total,
    }
    this.serviceOrdenCompra.post(ordenAdd);
    this.route.navigate(['/', 'orden-compra'])
  }
}
