import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';


@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent {
  listaCategorias: any = ["Tecnológico", "Vehículo", "Moda", "Hogar y mueble"]
  editarInvalido: boolean = false;
  productoId: any;
  producto: any = {};
  listadoProveedores: any = [];
  listadoNombresJoinApellidoRzonSocial: any = []
  listadoNombresJoinApellido: any = []
  proveedorEncontrado: any = []

  productosSKU: any = []
  isDisabled = true;

  codigoSku: string = '';
  nombreProducto: string = '';
  proveedor: string = '';
  categoria: string = '';
  imagen: string = '';
  descripcion: string = '';
  precio: string = '';

  constructor(private serviceProduct: ProductosService,
    private route: Router, private _activateRoute: ActivatedRoute,
    private serviceProveedor: ProveedoresService) {
    /* ;*/
  }

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(data => {
      this.productoId = data.get('id');
    })
    this.serviceProduct.getById(this.productoId).subscribe(res => {
      this.producto = res;
      console.log(this.producto)
      this.codigoSku = this.producto.codigoSKU;
      this.nombreProducto = this.producto.nameProducto;
      this.proveedor = this.producto.proveedor;
      this.categoria = this.producto.categoria;
      this.imagen = this.producto.imagen;
      this.descripcion = this.producto.descripcion;
      this.precio = this.producto.precio;
    })

    /*this.myFormReactivo = this.fb.group({
      codigoSkuForm: [""],
      nombreProductoForm: ["   ", [Validators.required, Validators.minLength(3)]],
      proveedorForm: [`${this.producto.proveedor}`, [Validators.required, Validators.minLength(1)]],
      categoriaForm: [`${this.producto.categoria}`, [Validators.required]],
      imagenForm: [`${this.producto.imagen}`, [Validators.required, Validators.minLength(5)]],
      descripcionForm: [`${this.producto.descripcion}`, [Validators.required, Validators.minLength(10)]],
      precioForm: [`${this.producto.precio}`, [Validators.required, Validators.minLength(1)]]
      // cuit: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{8}-\d{1}$/)]],
    })*/

    this.getListadProveedores()
  }

  getListadProveedores() {
    this.serviceProveedor.get().subscribe((data: any) => {
      this.listadoProveedores = data

      for (let i = 0; i < this.listadoProveedores.length; i++) {
        let join = this.listadoProveedores[i].apellido + " " + this.listadoProveedores[i].nombre;
        this.listadoNombresJoinApellidoRzonSocial.push({ union: join, razonSocial: this.listadoProveedores[i].razonSocial, id: this.listadoProveedores[i].id })
      }

      const eliminaProveedoresRepetidos = new Set(this.listadoNombresJoinApellidoRzonSocial)
      this.listadoNombresJoinApellidoRzonSocial = [...eliminaProveedoresRepetidos];
      //console.log(this.listadoNombresJoinApellidoRzonSocial)
      this.listadoNombresJoinApellido = this.listadoNombresJoinApellidoRzonSocial.map((item: any) =>
        item.union
      )

      const eliminaProveedoresRepetidosName = new Set(this.listadoNombresJoinApellido)
      this.listadoNombresJoinApellido = [...eliminaProveedoresRepetidosName];
      //console.log(this.listadoNombresJoinApellido)
    });
  }


  /*get formInvalido() {
    let formularioToValidar = this.myFormReactivo.invalid;
    return formularioToValidar
  }*/
  private validarFormulario(): boolean {
    if (!this.nombreProducto || this.nombreProducto.length < 2) {
      alert('Nombre producto es requerido, y debe tener al menos 2 caracteres.');
      return false;
    }
    if (!this.proveedor ) {
      alert('Proveedor es requerido.');
      return false;
    }
    if (!this.categoria ) {
      alert('Categoria es requerida.');
      return false;
    }
    if (!this.imagen ) {
      alert('Imagen es requerida.');
      return false;
    }
    if (this.imagen.replace(/(http|https|ftp|ftps).*(png|jpg|jpeg|gif|webp|=)$/g, "") ) {
      alert('Imagen debe cumplir con formato url + .png .web .jpeg.');
      return false;
    }
    if (!this.descripcion || this.descripcion.length < 10) {
      alert('La descripción es requerida, y debe tener al menos 10 caracteres.');
      return false;
    }
    if (!this.precio || this.precio.length > 15) {
      alert('Precio es requerido y debe tener un máximo de 15 cdigitos.');
      return false;
    }
    return true;
  }
  //Funciones de botones Enviar y Limpiar
  enviar(form: any): void {
    /*if (this.myFormReactivo.invalid) {
      return Object.values(this.myFormReactivo.controls).forEach(controls => {
        controls.markAllAsTouched()
      })
    } else { //Se compara si hay cambios.
      this.proveedorEncontrado = this.listadoNombresJoinApellidoRzonSocial.filter((item: any) => item.union == this.myFormReactivo.get('proveedorForm')?.value)
      console.log(this.proveedorEncontrado)
      let productoAdd = {
        id: this.productoId,
        codigoSKU: this.myFormReactivo.get('codigoSkuForm')?.value,
        nameProducto: this.myFormReactivo.get('nombreProductoForm')?.value,
        imagen: this.myFormReactivo.get('imagenForm')?.value,
        proveedor: this.myFormReactivo.get('proveedorForm')?.value,
        categoria: this.myFormReactivo.get('categoriaForm')?.value,
        descripcion: this.myFormReactivo.get('descripcionForm')?.value,
        precio: this.myFormReactivo.get('precioForm')?.value,
        idProveedor: this.proveedorEncontrado[0].idProveedor,
        razonSocial: this.proveedorEncontrado[0].razonSocial
      }
      console.log(productoAdd)
      let productoCompare = {
        id: this.productoId,
        codigoSKU: this.producto.codigoSKU,
        nameProducto: this.producto.nameProducto,
        imagen: this.producto.imagen,
        proveedor: this.producto.proveedor,
        categoria: this.producto.categoria,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
        idProveedor: this.producto.idProveedor,
        razonSocial: this.producto.razonSocial
      }

      if (JSON.stringify(productoAdd) == JSON.stringify(productoCompare)) {
        this.editarInvalido = true;
        alert("Son  igualeas")
      } else {
        this.serviceProduct.put(productoAdd, this.productoId).subscribe(res => {
          //console.log("Se editó un producto" + res)
          this.route.navigate(['/', 'productos'])
        });
      }*/
    if (this.validarFormulario()) {
      this.proveedorEncontrado = this.listadoNombresJoinApellidoRzonSocial.filter((item: any) => item.union == this.proveedor)
      const formData = {
        id: this.productoId,
        codigoSKU: this.codigoSku,
        nameProducto: this.nombreProducto,
        imagen: this.imagen,
        proveedor: this.proveedor,
        categoria: this.categoria,
        descripcion: this.descripcion,
        precio: this.precio,
        idProveedor: this.proveedorEncontrado[0].id,
        razonSocial: this.proveedorEncontrado[0].razonSocial
      };
      const productoCompare = {
        id: this.productoId,
        codigoSKU: this.producto.codigoSKU,
        nameProducto: this.producto.nameProducto,
        imagen: this.producto.imagen,
        proveedor: this.producto.proveedor,
        categoria: this.producto.categoria,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
        idProveedor: this.producto.idProveedor,
        razonSocial: this.producto.razonSocial
      }
      if (JSON.stringify(formData) == JSON.stringify(productoCompare)) {
        this.editarInvalido = true;
        alert("Son  igualeas")
      } else {
        this.serviceProduct.put(formData, this.productoId).subscribe(res => {
          console.log(res)
          this.route.navigate(['/', 'productos'])
        });
      }
    }
  }

  limpiar() {
    this.nombreProducto = "";
    this.proveedor = "";
    this.categoria = "";
    this.imagen = "";
    this.descripcion = "";
    this.precio = "";
  }
}
