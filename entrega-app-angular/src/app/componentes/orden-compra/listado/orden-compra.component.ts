import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.css']
})
export class OrdenCompraComponent implements OnInit {
  ordenDeCompra: any = [];
  ordenDeCompra2: any = [];
  ordenesFechasCreadas: any = []
  ordenDetail: any = {}
  ordenDetailTotal = 0;
  ordenDetailSuma = 0;
  seElimino: boolean = false
  existenOrdenes: boolean = false;
  textoDeInput = "";
  private modalService = inject(NgbModal);

  constructor(private ordenService: OrdenCompraService,
    private route: Router) { }

  ngOnInit(): void {

    this.getOrdenCompra()
  }

  onKeyUp(event: any) {
    console.log("valor model: " + this.textoDeInput);
    //hacer filtro
    this.ordenDeCompra2 = this.ordenDeCompra.filter((e: any) =>
      e.ordenDireccion.toUpperCase().includes(this.textoDeInput.toUpperCase())
    );
  }

  openScrollableContent(longContent: TemplateRef<any>, id: any) {
    this.ordenService.getById(id).subscribe((data: any) => {
      this.ordenDetail = data;
      for (let i = 0; i < this.ordenDetail.detalles.length; i++) {
        this.ordenDetailSuma += this.ordenDetail.detalles[i].detalleCantidad * this.ordenDetail.detalles[i].productosId.precio;
      }
    });

    this.modalService.open(longContent, { scrollable: true });
  }

  getOrdenCompra() {
    this.ordenService.get().subscribe((data: any) => {
      this.ordenDeCompra = data;
      this.ordenDeCompra = this.ordenDeCompra.filter((ord: any) => ord.estadoId.nombre == "aceptada")
      if (this.ordenDeCompra.length < 1) {
        this.existenOrdenes = true;
      }
      this.ordenDeCompra2 = this.ordenDeCompra;
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
    this.seElimino = true
    this.ordenService.put(obj, orden.id).subscribe((data: any) => {

      alert("Se dio de baja la orden")
      this.getOrdenCompra()
    })
  }
}
