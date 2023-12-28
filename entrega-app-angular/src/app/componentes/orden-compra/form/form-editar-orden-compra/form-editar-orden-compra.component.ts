import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenCompraService } from 'src/app/services/orden-de-compra/orden-compra.service';
import { ProductosService } from 'src/app/services/producto/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-form-editar-orden-compra',
  templateUrl: './form-editar-orden-compra.component.html',
  styleUrls: ['./form-editar-orden-compra.component.css']
})
export class FormEditarOrdenCompraComponent implements OnInit {
  editarInvalido: boolean = false;
  fechaEntrega = "";
  direccion = "";
  proveedor = "";
  producto = "";
  cantidad = 0;
  total = 0;
  idNuevo: any;
  orden: any;


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
    private _activateRoute: ActivatedRoute,
    private serviceProveedor: ProveedoresService,
    private serviceProduct: ProductosService) { }

  ngOnInit(): void {
    this.idNuevo = this._activateRoute.snapshot.paramMap.get('id');
    this.getOrderById()
    this.getListadProveedores()
    this.getListadProductos()
  }
  getListadProveedores() {
    this.serviceProveedor.get().subscribe((data: any) => {
      this.listadoProveedores = data

      for (let i = 0; i < this.listadoProveedores.length; i++) {
        let join = this.listadoProveedores[i].apellido + " " + this.listadoProveedores[i].nombre;
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

  getOrderById() {
    this.serviceOrdenCompra.getById(this.idNuevo).subscribe((data: any) => {
      this.orden = data
      console.log(data)
      this.fechaEntrega = this.orden.fechaEntrega
      this.direccion = this.orden.direccion;
      this.proveedor = this.orden.proveedor;
      this.producto = this.orden.producto;
      this.cantidad = this.orden.cantidad;
      this.total = this.orden.total


    })

  }

  enviar(form: any) {
    if (this.validarFormulario()) {
      let ordenAdd = {
        id: this.idNuevo,
        fechaEntrega: this.fechaEntrega,
        direccion: this.direccion,
        proveedor: this.proveedor,
        producto: this.producto,
        cantidad: this.cantidad,
        total: this.total,
      }
      const productoCompare = {
        id: this.idNuevo,
        fechaEntrega: this.orden.fechaEntrega,
        direccion: this.orden.direccion,
        proveedor: this.orden.proveedor,
        producto: this.orden.producto,
        cantidad: this.orden.cantidad,
        total: this.orden.total,
      }

      if (JSON.stringify(ordenAdd) == JSON.stringify(productoCompare)) {
        this.editarInvalido = true;
        
      } else {
        this.editarInvalido = false;
        this.serviceOrdenCompra.put(ordenAdd, this.idNuevo).subscribe(res => {
          console.log(res)
          alert("Se modificó una orden correctamente")
          this.route.navigate(['/', 'orden-compra'])
        });
      }
    }

  }
  limpiar() {
    this.fechaEntrega = "";
    this.direccion = "";
    this.proveedor = "";
    this.producto = "";
    this.cantidad = 0;
    this.total = 0
  }
}
