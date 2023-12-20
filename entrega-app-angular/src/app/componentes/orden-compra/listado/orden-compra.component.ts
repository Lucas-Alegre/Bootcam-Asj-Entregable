import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent {
  constructor(private ordenService: OrdenCompraService,
    private route: Router) { }

  ordenDeCompra = this.ordenService.get();



  eliminar(orden: any) {
    this.ordenDeCompra = this.ordenService.delete(orden)
  }
  
}
