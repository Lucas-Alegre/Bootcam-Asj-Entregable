import { Injectable } from '@angular/core';
import { productos } from '../../data/productos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: any = productos;

  constructor(private http: HttpClient) { }
  get() {
    return this.productos;
  }

  post(producto: any) {
    this.productos.push(producto);
  }

  put(producto: any) { 
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].id==producto.id){
        this.productos[i]=producto;
      }
    }
    return this.productos;
  }

  delete(producto: any) {
    let productoEliminado = this.productos.filter((prod: any) => prod.id !== producto.id)
    this.productos = productoEliminado;
    return this.productos;
  }
}
