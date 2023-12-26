import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country/country.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  proveedor: any = []
 

  constructor(
    private servicesProveedor: ProveedoresService,
    private route: Router) { }

  ngOnInit(): void {
    this.getProveedor()
  }


  getProveedor() {
    this.servicesProveedor.get().subscribe((data) => {
      this.proveedor = data
      this.proveedor.sort(this.sortFunc)
    });
  }

  sortFunc(a: any, b: any) {
    if (a.nombreCompleto < b.nombreCompleto) {
      return -1;
    }
    if (a.nombreCompleto > b.nombreCompleto) {
      return 1;
    }
    return 0;
  }

  

  eliminar(proveedor: any) {
    this.servicesProveedor.delete(proveedor.id).subscribe(res => {
      this.getProveedor()
    })
  }

}
