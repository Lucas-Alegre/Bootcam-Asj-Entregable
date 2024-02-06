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
  fechaEnvio: any;
  fechaEntrega = "";
  proveedor = "";
  informacionRecepcion = ""
  producto = "";
  cantidad = "";
  arrayCantidad: any = [];
  idProveedor: any = 0;
  listProductTable: any = [];
  noContieneProductos: boolean = true
  detalles: any = []
  suma = 0;
  listadoProductos: any = []
  listadoProductosNombre: any = []
  listadoProveedores: any = []
  listadoProveedoresNombreCompletos: any = [];
  listadoFilterProveedoresNombreCompletos: any;
  productosDisponiblesNombres: any = [];
  listadoNombresJoinApellido: any = [];
  productosDisponibles: any = []
  proveedorValido: boolean = false;
  precioPrueba: any = 25;

  constructor(
    private serviceOrdenCompra: OrdenCompraService,
    private route: Router,
    private serviceProveedor: ProveedoresService,
    private serviceProduct: ProductosService) { }

  ngOnInit(): void {
    this.getListadProveedores()
    this.getListadProductos()
    this.fechaEnvio = new Date()
  }


  getListadProveedores() {
    this.serviceProveedor.get().subscribe((data: any) => {
      this.listadoProveedores = data;
      this.listadoProveedores = this.listadoProveedores.filter((p: any) => p.deleteAt == false)
    })
  }

  getListadProductos() {
    this.serviceProduct.get().subscribe((data: any) => {
      this.listadoProductos = data
      this.listadoProductos = this.listadoProductos.filter((pro: any) => pro.proveedorId.nombreProveedor == this.proveedor)
    })
  }


  proveedorChange(valor: any) {

    this.listProductTable = []
    this.listadoProductos = []
    this.arrayCantidad = []
    this.cantidad = "0"
    this.noContieneProductos = true
    this.producto = "";
    this.getListadProductos()
  }

  AgregarProducto() {
    let product = this.listadoProductos.filter((prod: any) => prod.nombreProducto == this.producto)
    this.listProductTable.push(product[0])

    if (this.listProductTable.length > 0) {
      this.noContieneProductos = false
    }

    this.arrayCantidad.push(this.cantidad)
    this.suma = 0;

    for (let i = 0; i < this.listProductTable.length; i++) {
      this.suma += this.listProductTable[i].precio * parseInt(this.arrayCantidad[i]);
    }
  }


  private validarFormulario(): boolean {
    return true;
  }

  enviar(form: any) {
    this.idProveedor = this.listadoProveedores.filter((prove: any) => prove.nombreProveedor == this.proveedor)
    let suma = 0;

    for (let i = 0; i < this.listProductTable.length; i++) {
      suma += this.listProductTable[i].precio * parseInt(this.arrayCantidad[i]);
      let detalle = {
        detalleCantidad: parseInt(this.arrayCantidad[i]),
        productosId: {
          id: this.listProductTable[i].id
        }
      }
      this.detalles.push(detalle)
    }

    let objectEnviar = {
      ordenDireccion: this.informacionRecepcion,
      ordenInformacionRecepcion: this.informacionRecepcion,
      total: suma,
      habilitado: true,
      fechaDeEntrega: this.fechaEntrega,
      proveedorId: {
        id: this.idProveedor[0].id
      },
      estadoId: {
        id: 2
      },
      detalles: this.detalles
    }

    this.serviceOrdenCompra.post(objectEnviar).subscribe(data => {
      console.log(data)
      this.route.navigate(['/', 'orden-compra'])
    }, (error => {
      console.log("Fijate igual xd")
      this.route.navigate(['/', 'orden-compra'])
    }))
    // console.log(objectEnviar)

    /*if (this.validarFormulario()) {
      this.serviceOrdenCompra.get().subscribe((data: any) => {
        this.idNuevo = data.length
      });
      let ordenAdd = {
        id: this.idNuevo + 2,
        fechaEntrega: this.fechaEntrega,
        proveedor: this.proveedor,
        producto: this.producto,
        cantidad: this.cantidad,
        total: this.precioPrueba,
        status: "pending"
      }
      this.serviceOrdenCompra.post(ordenAdd).subscribe(res => {
        console.log(res)
        alert("Se agregó una orden correctamente")
        this.route.navigate(['/', 'orden-compra'])
      });
    }*/
  }

  limpiar() {
    this.fechaEntrega = ""
    this.proveedor = ""
    this.producto = ""
    this.cantidad = "";
  }

  eliminarProducto() {
    this.listProductTable = []
    this.arrayCantidad = []
    this.cantidad = "";
    this.producto = ""
    this.proveedor = "";
    this.suma = 0;
    this.listadoProductos = []
  }
}
