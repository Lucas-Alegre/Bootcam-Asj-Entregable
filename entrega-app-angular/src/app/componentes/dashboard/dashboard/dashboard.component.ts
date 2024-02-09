import { Component, OnInit } from '@angular/core';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';
import { ProductosService } from 'src/app/services/producto/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  localData: any;
  productos: any = []
  cantidadProductos: any;
  proveedores: any = []
  cantidadProveedores: any;
  ordenes: any = []
  cantidadOrdenes: any;

  constructor(private productServices: ProductosService,
    private proveedorServices: ProveedoresService,
    private ordenServices: OrdenCompraService) {
  }

  ngOnInit(): void {
    this.localData = localStorage.getItem('userEncontrado');
    this.localData = JSON.parse(this.localData)
    this.getCantidadProductos()
    this.getCantidadProveedores()
    this.getCantidadOrdenes()
  }

  getCantidadProductos() {
    this.productServices.get().subscribe((data) => {
      this.productos = data;
      this.productos = this.productos.filter((p: any) => p.habilitado == true);
      this.cantidadProductos = this.productos.length;
    })
  }

  getCantidadProveedores() {
    this.proveedorServices.get().subscribe(prov => {
      this.proveedores = prov;
      this.proveedores = this.proveedores.filter((e: any) => e.deleteAt == false)
      this.cantidadProveedores = this.proveedores.length;
    })
  }

  getCantidadOrdenes() {
    this.ordenServices.get().subscribe(orden => {
      this.ordenes = orden;
      this.ordenes = this.ordenes.filter((ord: any) => ord.estadoId.nombre == "aceptada")
      this.cantidadOrdenes = this.ordenes.length;
    })
  }

}
