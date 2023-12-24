import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';

@Component({
  selector: 'app-form-agregar-producto',
  templateUrl: './form-agregar-producto.component.html',
  styleUrls: ['./form-agregar-producto.component.css']
})
export class FormAgregarProductoComponent implements OnInit {
  listaCategorias: any = ["Tecnológico", "Vehículo", "Moda", "Hogar y mueble"]
  nombreProducto = "";
  proveedor = "";
  categoria = "";
  imagen = "";
  descripcion = "";
  precio = "";
  idNuevo = 0;
  public form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private serviceProduct: ProductosService,
    private route: Router) { }

  ngOnInit(): void {
    this.serviceProduct.get().subscribe(data => {
      this.idNuevo = data.length
      console.log(this.idNuevo + "idnuevo")
    });
    this.form = this.formBuilder.group({
      nombreProductoForm: ['', [Validators.required, Validators.minLength(3)]],
      proveedorForm: ['', [Validators.required, Validators.minLength(1)]],
      categoriaForm: ['', [Validators.required]],
      imagenForm: ['', [Validators.required, Validators.minLength(5)]],
      descripcionForm: ['', [Validators.required, Validators.minLength(10)]],
      precioForm: ['1', [Validators.required, Validators.minLength(1)]]
    })
  }

  get nombreProductoValido() {
    return this.form.get('nombreProductoForm')?.invalid && this.form.get('nombreProductoForm')?.touched;
  }

  get proveedorStringValido() {
    let nombreProveedor = this.form.get('proveedorForm')?.value;
    if (nombreProveedor.replace(/[^0-9]/g, "").length) {
      return true
    }
    return false
  }

  get imagenValida() {
    return this.form.get('imagenForm')?.invalid && this.form.get('imagenForm')?.touched;
  }
  get imagenValidaFormato() {
    let nombreProveedor = this.form.get('imagenForm')?.value;
    if (nombreProveedor.replace(/(http|https|ftp|ftps).*(png|jpg|jpeg|gif|webp|=)$/g, "")) {
      return true
    }
    return false
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

    if (precio == 0) {
      return true
    }
    if (precio < 0) {
      return true
    }
    return this.form.get('precioForm')?.invalid && this.form.get('precioForm')?.touched;
  }

  get formInvalido() {
    let formularioToValidar = this.form.invalid;
    if (formularioToValidar) {
      return true
    }
    return false
  }

  guardar() {/*
    let productoAdd = {
      id: this.idNuevo + 2,
      nameProducto: this.nombreProducto,
      imagen: this.imagen,
      proveedor: this.proveedor,
      categoria: this.categoria,
      descripcion: this.descripcion,
      precio: this.precio,
    }

    this.serviceProduct.post(productoAdd).subscribe(res => {
      //alert("Se agrego un producto" + res)
    });

    this.route.navigate(['/', 'productos'])*/
    console.log(this.form.value)
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(controls => {
        controls.markAllAsTouched()
      })
    } else {
      let productoAdd = {
        id: this.idNuevo + 2,
        nameProducto: this.form.get('nombreProductoForm')?.value,
        imagen: this.form.get('imagenForm')?.value,
        proveedor: this.form.get('proveedorForm')?.value,
        categoria: this.form.get('categoriaForm')?.value,
        descripcion: this.form.get('descripcionForm')?.value,
        precio: this.form.get('precioForm')?.value,
      }
      this.serviceProduct.post(productoAdd).subscribe(res => {
        console.log("Se agrego un producto" + res)
      });
      this.route.navigate(['/', 'productos'])
    }

  }

  limpiar() {
    this.form.reset()
    this.ngOnInit()
  }
}
