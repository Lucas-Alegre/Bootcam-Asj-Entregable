import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/producto/productos.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-form-agregar-producto',
  templateUrl: './form-agregar-producto.component.html',
  styleUrls: ['./form-agregar-producto.component.css']
})
export class FormAgregarProductoComponent implements OnInit {
  listaCategorias: any = ["Tecnológico", "Vehículo", "Moda", "Hogar y mueble"]

  idNuevo = 0;
  productosSKU: any = []
  listadoProveedores: any = []
  listadoProveedoresNombre: any = [];
  listadoProveedoresApellido: any = [];
  listadoNombresJoinApellidoRzonSocial: any = []
  listadoNombresJoinApellido: any = []
  proveedorEncontrado: any = [];

  codigoSku: string = '';
  nombreProducto: string = '';
  proveedor: string = '';
  categoria: string = '';
  imagen: string = '';
  descripcion: string = '';
  precio: string = '';

  codigoSkuvalidado: boolean = false;
  codigoSkuRepetidovalidado: boolean = false;
  nombreProductoValido:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private serviceProduct: ProductosService,
    private route: Router,
    private serviceProveedor: ProveedoresService,) { }

  ngOnInit(): void {
    this.serviceProduct.get().subscribe(data => {
      this.idNuevo = data.length;
      this.productosSKU = data.map((item: any) => item.codigoSKU);
    });
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

  cambiaEstadoValidado(valor: any) {
    if (valor.length > 2) {
      this.codigoSkuvalidado = false;
    }
    if (valor.length <= 2) {
      this.codigoSkuvalidado = true;
    }
    let skuValidate = this.productosSKU.filter((item: any) => item == valor)
    if (skuValidate[0]) {
      this.codigoSkuRepetidovalidado = true;
    }
    if (!skuValidate[0]) {
      this.codigoSkuRepetidovalidado = false;
    }
  }

  cambiaNombreProductoValidado(valor: any) {
    if (valor.length <= 2) {
      this.codigoSkuvalidado = true;
    }
  }

  private validarFormulario(): boolean {
    let skuValidate = this.productosSKU.filter((item: any) => item == this.codigoSku)
    //let proveedorContieneNumeros = this.proveedor.replace(/[^0-9]/g,"").length;
    if (skuValidate[0]) {
      this.codigoSkuRepetidovalidado = true;
      return false;
    }
    if (!this.codigoSku) {
      this.codigoSkuvalidado = true;
      return false;
    }
    if (!this.nombreProducto || this.nombreProducto.length < 2) {
      alert('Nombre producto es requerido, y debe tener al menos 2 caracteres.');
      this.nombreProductoValido=true;
      //Quede en validacion esta
      return false;
    }
    if (!this.proveedor) {
      alert('Proveedor es requerido.');
      return false;
    }
    if (!this.categoria) {
      alert('Categoria es requerida.');
      return false;
    }
    if (!this.imagen) {
      alert('Imagen es requerida.');
      return false;
    }
    if (this.imagen.replace(/(http|https|ftp|ftps).*(png|jpg|jpeg|gif|webp|=)$/g, "")) {
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

  /*
    get codigoSkuValido2() {
      return this.codigoSku;
    }
    get codigoSkuValido() {
      return this.form.get('codigoSkuForm')?.invalid && this.form.get('codigoSkuForm')?.touched;
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
  */
  enviar(form: any): void {
    if (this.validarFormulario()) {
      this.proveedorEncontrado = this.listadoNombresJoinApellidoRzonSocial.filter((item: any) => item.union == this.proveedor)
      const formData = {
        id: this.idNuevo + 2,
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

      this.serviceProduct.post(formData).subscribe(res => {
        console.log(res)
        this.route.navigate(['/', 'productos'])
      });

    }

  }

  limpiar() {
    this.codigoSku = "";
    this.nombreProducto = "";
    this.proveedor = "";
    this.categoria = "";
    this.imagen = "";
    this.descripcion = "";
    this.precio = "";
  }
}
