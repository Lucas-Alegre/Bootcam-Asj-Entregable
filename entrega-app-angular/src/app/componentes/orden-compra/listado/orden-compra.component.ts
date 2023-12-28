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
  seElimino:boolean=false
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
    this.seElimino=true
    this.ordenService.delete(orden.id).subscribe((data: any) => {
      this.getOrdenCompra()
    })
  }
}
