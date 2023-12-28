import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent implements OnInit {
  ordenDeCompra: any = [];
  ordenDeCompra2: any = [];
  seElimino: boolean = false
  existenOrdenes: boolean = false;

  constructor(private ordenService: OrdenCompraService,
    private route: Router) { }

  ngOnInit(): void {

    this.getOrdenCompra()
  }
  getOrdenCompra() {
    this.ordenService.get().subscribe((data: any) => {
      this.ordenDeCompra = data;
      if (data.length < 1) {
        this.existenOrdenes = true;
      }
      for (let i = 0; i < this.ordenDeCompra.length; i++) {
        if (this.ordenDeCompra[i].status == "pending" || this.ordenDeCompra[i].status == "alta") {
          this.ordenDeCompra2.push(this.ordenDeCompra[i])
        }
      }
      console.log(this.ordenDeCompra2)
    });
  }

  eliminar(orden: any) {
    let obj = {
      id: orden.id,
      fechaEntrega: orden.fechaEntrega,
      direccion: orden.direccion,
      proveedor: orden.proveedor,
      producto: orden.producto,
      cantidad: orden.cantidad,
      total: orden.total,
      status: "baja"
    }

    this.ordenService.put(obj, orden.id).subscribe((data: any) => {
      this.seElimino = true
      alert("Se dio de baja la orden")
      this.ngOnInit()
    })


    // this.seElimino = true
    // this.ordenService.delete(obj.id).subscribe((data: any) => {
    // this.getOrdenCompra()
    //})
  }
}
