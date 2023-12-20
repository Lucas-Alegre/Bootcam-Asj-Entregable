import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-form-agregar-proveedor',
  templateUrl: './form-agregar-proveedor.component.html',
  styleUrls: ['./form-agregar-proveedor.component.css']
})
export class FormAgregarProveedorComponent {
  email = "";
  rubro = "";
  direccion = "";
  cuit = "";
  nombreCompleto = "";
  telefono = "";
  constructor(
    private serviceProveedor: ProveedoresService,
    private route: Router) { }

  enviar() {
    let idNuevo = this.serviceProveedor.get().length;
    let proveedorAdd = {
      id: idNuevo,
      email: this.email,
      rubro: this.rubro,
      direccion: this.direccion,
      cuit: this.cuit,
      nombreCompleto: this.nombreCompleto,
      telefono: this.telefono,
    }
    this.serviceProveedor.post(proveedorAdd);
    this.route.navigate(['/', 'proveedores'])
  }
}
