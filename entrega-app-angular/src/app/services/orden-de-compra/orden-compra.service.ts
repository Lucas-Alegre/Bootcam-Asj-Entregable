import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ordenDeCompra } from 'src/app/data/ordenCompra';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraService {

  ordenCompra: any = ordenDeCompra;

  constructor(private http: HttpClient) { }
  get() {
    return this.ordenCompra;
  }

  post(orden: any) {
    this.ordenCompra.push(orden);
  }

  put(orden: any) {
    for (let i = 0; i < this.ordenCompra.length; i++) {
      if (this.ordenCompra[i].id == orden.id) {
        this.ordenCompra[i] = orden;
      }
    }
    return this.ordenCompra;
  }

  delete(orden: any) {
    let ordenEliminada = this.ordenCompra.filter((ord: any) => ord.id !== orden.id)
    this.ordenCompra = ordenEliminada;
    return this.ordenCompra;
  }

}
