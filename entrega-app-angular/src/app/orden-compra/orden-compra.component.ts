import { Component } from '@angular/core';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent {
  productos = [
    {
      numeroOrden: 1,
      fechaEntrega: "2023-12-25",
      direccion: "Diamante 4703",
      proveedor: "Lucas Alegre",
      producto: "Celular",
      cantidad: 2,
      total: 100000
    },
    {
      numeroOrden: 2,
      fechaEntrega: "2024-04-20",
      direccion: "Diamante 4703",
      proveedor: "Lucas Alegre",
      producto: "Celular",
      cantidad: 2,
      total: 100000
    },
    {
      numeroOrden: 3,
      fechaEntrega: "2023-12-25",
      direccion: "Diamante 4703",
      proveedor: "Lucas Alegre",
      producto: "Celular",
      cantidad: 2,
      total: 100000
    },
    {
      numeroOrden: 4,
      fechaEntrega: "2023-12-25",
      direccion: "Diamante 4703",
      proveedor: "Lucas Alegre",
      producto: "Celular",
      cantidad: 2,
      total: 100000
    },
    {
      numeroOrden: 5,
      fechaEntrega: "2023-12-25",
      direccion: "Diamante 4703",
      proveedor: "Lucas Alegre",
      producto: "Celular",
      cantidad: 2,
      total: 100000
    },

  ]

  editProduct(product: any) {

  }
  deleteProduct(product: any) {

  }
}
