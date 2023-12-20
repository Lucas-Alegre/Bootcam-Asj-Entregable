import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';

@Component({
  selector: 'app-form-editar-orden-compra',
  templateUrl: './form-editar-orden-compra.component.html',
  styleUrls: ['./form-editar-orden-compra.component.css']
})
export class FormEditarOrdenCompraComponent {
  fechaEntrega = "";
  direccion = "";
  proveedor = "";
  producto = "";
  cantidad = 0;
  total = 0;

  constructor(
    private serviceOrdenCompra: OrdenCompraService,
    private route: Router,
    private _activateRoute: ActivatedRoute) { }

  enviar() {
    let idNuevo = this._activateRoute.snapshot.paramMap.get('id');
    let ordenAdd = {
      id: idNuevo,
      fechaEntrega: this.fechaEntrega,
      direccion: this.direccion,
      proveedor: this.proveedor,
      producto: this.producto,
      cantidad: this.cantidad,
      total: this.total,
    }
    this.serviceOrdenCompra.put(ordenAdd);
    this.route.navigate(['/', 'orden-compra'])
  }
}
