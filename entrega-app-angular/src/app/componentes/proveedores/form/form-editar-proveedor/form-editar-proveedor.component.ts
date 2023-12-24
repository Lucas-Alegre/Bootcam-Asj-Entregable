import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-form-editar-proveedor',
  templateUrl: './form-editar-proveedor.component.html',
  styleUrls: ['./form-editar-proveedor.component.css']
})
export class FormEditarProveedorComponent {
  email = "";
  rubro = "";
  direccion = "";
  cuit = "";
  nombreCompleto = "";
  telefono = "";

  constructor(
    private serviceProveedor: ProveedoresService,
    private route: Router,
    private _activateRoute: ActivatedRoute) { }


  enviar() {
    let idNuevo = this._activateRoute.snapshot.paramMap.get('id');
    let proveedorAdd = {
      id: idNuevo,
      email: this.email,
      rubro: this.rubro,
      direccion: this.direccion,
      cuit: this.cuit,
      nombreCompleto: this.nombreCompleto,
      telefono: this.telefono,
    }
   // console.log(this.serviceProveedor.put(proveedorAdd));
    this.route.navigate(['/', 'proveedores'])
  }
}
