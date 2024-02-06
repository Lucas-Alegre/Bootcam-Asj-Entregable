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
    this.getListadProductos()
    this.listProductTable = []
    this.arrayCantidad = []
    this.noContieneProductos = true
  }

  AgregarProducto() {
    let product = this.listadoProductos.filter((prod: any) => prod.nombreProducto == this.producto)
    this.listProductTable.push(product[0])

    if (this.listProductTable.length > 0) {
      this.noContieneProductos = false
    }

    this.arrayCantidad.push(this.cantidad)
  }


  private validarFormulario(): boolean {
    return true;
  }

  enviar(form: any) {
    this.idProveedor = this.listadoProveedores.filter((prove: any) => prove.nombreProveedor == this.proveedor)
    //detalles:[]
    console.log(this.listProductTable)
    console.log(this.arrayCantidad)

    /*
    {
      "detalleCantidad": 5,
      "productosId": {
        "id":2
      }
    }
    */
    let objectEnviar = {
      ordenDireccion: this.informacionRecepcion,
      ordenInformacionRecepcion: this.informacionRecepcion,
      total: 200,
      habilitado: true,
      fechaDeEntrega: this.fechaEntrega,
      proveedorId: {
        id: this.idProveedor[0].id
      },
      estadoId: {
        id: 2
      },
      detalles: []
    }
    //console.log(objectEnviar)

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
  }
}
