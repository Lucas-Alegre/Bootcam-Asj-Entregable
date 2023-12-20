import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { proveedor } from 'src/app/data/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  proveedor: any = proveedor;

  constructor(private http: HttpClient) { }
  get() {
    return this.proveedor;
  }

  post(proveedor: any) {
    this.proveedor.push(proveedor);
  }

  put(proveedor: any) {
    for (let i = 0; i < this.proveedor.length; i++) {
      if (this.proveedor[i].id == proveedor.id) {
        this.proveedor[i] = proveedor;
      }
    }
    return this.proveedor;
  }

  delete(proveedor: any) {
    let proveedorEliminado = this.proveedor.filter((prov: any) => prov.id !== proveedor.id)
    this.proveedor = proveedorEliminado;
    return this.proveedor;
  }
}
