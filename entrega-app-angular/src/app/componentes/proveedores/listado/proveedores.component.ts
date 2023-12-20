import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  constructor(
    private serviceProveedor: ProveedoresService,
    private route: Router) { }

  proveedor = this.serviceProveedor.get()


  eliminar(proveedor: any) {
    this.proveedor = this.serviceProveedor.delete(proveedor)
  }

}
