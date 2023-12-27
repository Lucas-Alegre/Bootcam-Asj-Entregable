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
  proveedorEncontrado:any=[]

  myFormReactivo: FormGroup = new FormGroup({});
  productosSKU: any = []
  codigoSku: boolean = false;
  isDisabled = true;

  constructor(private fb: FormBuilder, private serviceProduct: ProductosService,
    private route: Router, private _activateRoute: ActivatedRoute,
    private serviceProveedor: ProveedoresService) {
    /* ;*/
  }

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(data => {
      this.productoId = data.get('id');
      this.getProductoByid()
    })
    console.log(this.myFormReactivo.value)
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
      console.log(this.listadoNombresJoinApellidoRzonSocial)
      this.listadoNombresJoinApellido = this.listadoNombresJoinApellidoRzonSocial.map((item: any) =>
        item.union
      )

      const eliminaProveedoresRepetidosName = new Set(this.listadoNombresJoinApellido)
      this.listadoNombresJoinApellido = [...eliminaProveedoresRepetidosName];
      console.log(this.listadoNombresJoinApellido)
    });
  }

  //
  getProductoByid() {
    this.serviceProduct.getById(this.productoId).subscribe(res => {
      this.producto = res;
      console.log(this.producto)
      this.myFormReactivo = this.fb.group({
        codigoSkuForm: [`${this.producto.codigoSKU}`],
        nombreProductoForm: [`${this.producto.nameProducto}`, [Validators.required, Validators.minLength(3)]],
        proveedorForm: [`${this.producto.proveedor}`, [Validators.required, Validators.minLength(1)]],
        categoriaForm: [`${this.producto.categoria}`, [Validators.required]],
        imagenForm: [`${this.producto.imagen}`, [Validators.required, Validators.minLength(5)]],
        descripcionForm: [`${this.producto.descripcion}`, [Validators.required, Validators.minLength(10)]],
        precioForm: [`${this.producto.precio}`, [Validators.required, Validators.minLength(1)]]
        // cuit: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{8}-\d{1}$/)]],
      })
    })
    /* this.serviceProduct.get().subscribe(data => {
       this.productosSKU = data.map((item: any) => item.codigoSKU);
     });
 
     this.form.controls['codigoSkuForm'].valueChanges.subscribe(value => {
       this.codigoSku = this.productosSKU.includes(value);
     })*/
  }


  get formInvalido() {
    let formularioToValidar = this.myFormReactivo.invalid;
    return formularioToValidar
  }

  //Funciones de botones Enviar y Limpiar
  enviar() {
    if (this.myFormReactivo.invalid) {
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
          console.log("Se editó un producto" + res)
          this.route.navigate(['/', 'productos'])
        });
      }
    }
  }

  limpiar() {
    this.myFormReactivo.setValue({ codigoSkuForm: "", nombreProductoForm: "", proveedorForm: "", categoriaForm: "", imagenForm: "", descripcionForm: "", precioForm: "1" })
  }
}
