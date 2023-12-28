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
  constructor(private ordenService: OrdenCompraService,
    private route: Router) { }

  ngOnInit(): void {

    this.getOrdenCompra()
  }
  getOrdenCompra() {
    this.ordenService.get().subscribe((data: any) => {
      this.ordenDeCompra = data;
    });
  }

  eliminar(orden: any) {
    this.ordenService.delete(orden.id).subscribe((data: any) => {
      alert("Orden de compra eliminado");
      this.getOrdenCompra()
    })
  }
}
