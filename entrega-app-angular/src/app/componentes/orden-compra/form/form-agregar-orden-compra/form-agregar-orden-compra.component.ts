import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';
import { ProductosService } from 'src/app/services/producto/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-form-agregar-orden-compra',
  templateUrl: './form-agregar-orden-compra.component.html',
  styleUrls: ['./form-agregar-orden-compra.component.css']
})
export class FormAgregarOrdenCompraComponent implements OnInit {
  fechaEntrega = "";
  direccion = "";
  proveedor = "";
  producto = "";
  cantidad = 0;
  total = 0;
  idNuevo = 0

  listadoProductos: any = []
  listadoProductosNombre: any = []
  listadoProveedores: any = []
  listadoProveedoresNombreCompletos: any = [];
  listadoFilterProveedoresNombreCompletos: any;
  productosDisponiblesNombres: any = [];
  listadoNombresJoinApellido: any = [];
  productosDisponibles: any = []
  proveedorValido: boolean = false;

  constructor(
    private serviceOrdenCompra: OrdenCompraService,
    private route: Router,
    private serviceProveedor: ProveedoresService,
    private serviceProduct: ProductosService) { }

  ngOnInit(): void {
    this.getListadProveedores()
    this.getListadProductos()
  }


  getListadProveedores() {
    this.serviceProveedor.get().subscribe((data: any) => {
      this.listadoProveedores = data

      for (let i = 0; i < this.listadoProveedores.length; i++) {
        let join = this.listadoProveedores[i].apellido + " " + this.listadoProveedores[i].nombre;
        //console.log(join)
        this.listadoProveedoresNombreCompletos.push({ nombreCompleto: join, id: this.listadoProveedores[i].id })
      }

      const eliminaProveedoresRepetidos = new Set(this.listadoProveedoresNombreCompletos)
      this.listadoProveedoresNombreCompletos = [...eliminaProveedoresRepetidos];
      this.listadoNombresJoinApellido = this.listadoProveedoresNombreCompletos.map((item: any) =>
        item.nombreCompleto
      )

      const eliminaProveedoresRepetidosName = new Set(this.listadoNombresJoinApellido)
      this.listadoNombresJoinApellido = [...eliminaProveedoresRepetidosName];
    })
  }

  getListadProductos() {
    this.serviceProduct.get().subscribe((data: any) => {
      this.listadoProductos = data
      this.listadoProductosNombre = this.listadoProductos.map((item: any) => item.nameProducto)
    })
  }


  proveedorChange(valor: any) {
    for (let i = 0; i < this.listadoProveedoresNombreCompletos.length; i++) {
      if (this.listadoProveedoresNombreCompletos[i].nombreCompleto == valor) {
        this.listadoFilterProveedoresNombreCompletos = this.listadoProveedoresNombreCompletos[i].id;
      }
    }
    this.productosDisponibles = this.listadoProductos.filter((item: any) => item.idProveedor == this.listadoFilterProveedoresNombreCompletos)
    this.productosDisponiblesNombres = this.productosDisponibles.map((item: any) => item.nameProducto)
  }


  private validarFormulario(): boolean {

    if (!this.total) {
      return false;
    }
    return true;
  }

  enviar(form: any) {
   
    if (this.validarFormulario()) {
      this.serviceOrdenCompra.get().subscribe((data: any) => {
        this.idNuevo = data.length
      });
      let ordenAdd = {
        id: this.idNuevo + 2,
        fechaEntrega: this.fechaEntrega,
        direccion: this.direccion,
        proveedor: this.proveedor,
        producto: this.producto,
        cantidad: this.cantidad,
        total: this.total,
      }
      this.serviceOrdenCompra.post(ordenAdd).subscribe(res => {
        console.log(res)
        this.route.navigate(['/', 'orden-compra'])
      });
    }
  }

  limpiar() {
    this.fechaEntrega = ""
    this.direccion = ""
    this.proveedor = ""
    this.producto = ""
    this.cantidad = 0;
    this.total = 0;
  }
}
