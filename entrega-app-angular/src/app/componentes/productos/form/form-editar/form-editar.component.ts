import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';


@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent {
  listaCategorias: any = ["Tecnológico", "Vehículo", "Moda", "Hogar y mueble"]
  editarInvalido: boolean = false;
  nombreProducto = "";
  productoId: any;
  producto: any = {};
  descripcion = "";
  proveedor = "";
  categoria = "";
  imagen = "";
  precio = "";
  idNuevo = 0;
  public form!: FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private serviceProduct: ProductosService,
    private route: Router,
    private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productoId = this._activateRoute.snapshot.paramMap.get('id');
    this.getProductos()
  }

  getProductos() {
    this.serviceProduct.getById(this.productoId).subscribe(res => {
      this.producto = res;
      this.form = this.formBuilder.group({
        nombreProductoForm: [`${this.producto.nameProducto}`, [Validators.required, Validators.minLength(3)]],
        proveedorForm: [`${this.producto.proveedor}`, [Validators.required, Validators.minLength(1)]],
        categoriaForm: [`${this.producto.categoria}`, [Validators.required]],
        imagenForm: [`${this.producto.imagen}`, [Validators.required, Validators.minLength(5)]],
        descripcionForm: [`${this.producto.descripcion}`, [Validators.required, Validators.minLength(10)]],
        precioForm: [`${this.producto.precio}`, [Validators.required, Validators.minLength(1)]]
      })
    })
  }

//Validaciones personalizadas para los inputs
  get nombreProductoValido() {
    return this.form.get('nombreProductoForm')?.invalid && this.form.get('nombreProductoForm')?.touched;
  }

  get proveedorStringValido() {
    let nombreProveedor = this.form.get('proveedorForm')?.value;
    return nombreProveedor.replace(/[^0-9]/g, "").length
  }

  get imagenValida() {
    return this.form.get('imagenForm')?.invalid && this.form.get('imagenForm')?.touched;
  }
  get imagenValidaFormato() {
    let nombreProveedor = this.form.get('imagenForm')?.value;
    return nombreProveedor.replace(/(http|https|ftp|ftps).*(png|jpg|jpeg|gif|webp|=)$/g, "")
  }

  get proveedorValido() {
    return this.form.get('proveedorForm')?.invalid && this.form.get('proveedorForm')?.touched;
  }

  get categoriaValido() {
    return this.form.get('categoriaForm')?.invalid && this.form.get('categoriaForm')?.touched;
  }

  get descriptionValida() {
    return this.form.get('descripcionForm')?.invalid && this.form.get('descripcionForm')?.touched;
  }

  get precioValido() {
    let precio = this.form.get('precioForm')?.value;
    if (precio <= 0) {
      return true
    }
    return this.form.get('precioForm')?.invalid && this.form.get('precioForm')?.touched;
  }

  get formInvalido() {
    let formularioToValidar = this.form.invalid;
    return formularioToValidar
  }

//Funciones de botones Enviar y Limpiar
  enviar() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(controls => {
        controls.markAllAsTouched()
      })
    } else { //Se compara si hay cambios.
      let productoAdd = {
        id: this.productoId,
        nameProducto: this.form.get('nombreProductoForm')?.value,
        imagen: this.form.get('imagenForm')?.value,
        proveedor: this.form.get('proveedorForm')?.value,
        categoria: this.form.get('categoriaForm')?.value,
        descripcion: this.form.get('descripcionForm')?.value,
        precio: this.form.get('precioForm')?.value,
      }
      let productoCompare = {
        id: this.productoId,
        nameProducto: this.producto.nameProducto,
        imagen: this.producto.imagen,
        proveedor: this.producto.proveedor,
        categoria: this.producto.categoria,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
      }

      if (JSON.stringify(productoAdd) == JSON.stringify(productoCompare)) {
        this.editarInvalido = true;
      } else {
        this.serviceProduct.put(productoAdd, this.productoId).subscribe(res => {
          console.log("Se editó un producto" + res)
          this.route.navigate(['/', 'productos'])
        });
      }
    }
  }

  limpiar() {
    this.form.setValue({ nombreProductoForm: "", proveedorForm: "", categoriaForm: "", imagenForm: "", descripcionForm: "", precioForm: "1" })
  }
}
