import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/services/country/country.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-form-agregar-proveedor',
  templateUrl: './form-agregar-proveedor.component.html',
  styleUrls: ['./form-agregar-proveedor.component.css']
})
export class FormAgregarProveedorComponent {
  listaCategorias: any = ["Tecnológico", "Vehículo", "Moda", "Hogar y mueble"]
  listaRoles: any = ["usuario", "admin"]
  listaCondicionIva: any = ["IVA Responsable Inscripto", "IVA Responsable no Inscripto", "IVA no Responsable", "IVA Sujeto Ecento",
    "Condumidor Final", "Responsable Monotributo", "Sujeto no Categorizado", "Proveedor del Exterior", "Cliente del Exterior",
    "IVA Liberado", "Agente de Percepción", "Pequeño Contribuyente Eventual", "Monotributista Social", "Pequeño Contribuyente Eventual Social"]
  nombreProducto = "";
  nombre: string = '';
  proveedor = "";
  categoria = "";
  imagen = "";
  descripcion = "";
  precio = "";
  idNuevo = 0;
  cuitAux: string = "";
  country: any = []
  countryName = []
  countryNameAux = []
  stateToCountry = []
  stateToCountryName: any = []
  citieToState: any = []
  citieToStateByName: any = []

  public form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private serviceProveedor: ProveedoresService,
    private servicesCountry: CountryService,
    private route: Router) { }

  ngOnInit(): void {
    this.serviceProveedor.get().subscribe(data => {
      this.idNuevo = data.length
      console.log(this.idNuevo + "idnuevo")
    });
    this.form = this.formBuilder.group({
      codigoForm: ['', [Validators.required, Validators.minLength(4)]],
      razonSocialForm: ['', [Validators.required, Validators.minLength(2)]],
      rubroForm: ['', [Validators.required]],
      sitioWebForm: ['', [Validators.required, Validators.minLength(12)]],
      condicionIvaForm: ['', [Validators.required]],
      imagenForm: ['', [Validators.required, Validators.minLength(5)]],

      localidadForm: ['', [Validators.required, Validators.minLength(3)]],
      provinciaForm: ['', [Validators.required, Validators.minLength(2)]],
      paisForm: ['', [Validators.required, Validators.minLength(3)]],
      calleForm: ['', [Validators.required, Validators.minLength(3)]],
      numeroCalleForm: ['1', [Validators.required, Validators.minLength(1)]],
      codigoPostalForm: ['1', [Validators.required, Validators.minLength(2)]],

      cuitForm: ['', [Validators.required, Validators.minLength(10)]],
      telefonoForm: ['', [Validators.required, Validators.minLength(6)]],
      emailForm: ['', [Validators.required, Validators.minLength(3)]],
      nombreForm: ['', [Validators.required, Validators.minLength(2)]],
      apellidoForm: ['', [Validators.required, Validators.minLength(2)]],
      rolForm: ['', [Validators.required]]
    })
    this.getCountry()
    this.form.controls['paisForm'].valueChanges.subscribe(value => {
      this.stateToCountry = this.country.filter((item: any) => item.country == value)
      this.stateToCountryName = this.stateToCountry.map((item: any) => item.subcountry);
      const stateToCountryConstName = new Set(this.stateToCountryName);
      this.stateToCountryName = [...stateToCountryConstName]
    })

    this.form.controls['provinciaForm'].valueChanges.subscribe(value => {
      this.citieToState = this.stateToCountry.filter((item: any) => item.subcountry == value)
      this.citieToStateByName = this.citieToState.map((item: any) => item.name);
      const citieToStateConstName = new Set(this.citieToStateByName);
      this.citieToStateByName = [...citieToStateConstName]
    })

    /*Para probar esto colocar el input en text-despues faltaria aplicarle un regex
    this.form.controls['cuitForm'].valueChanges.subscribe(value => {
      let cuit = value
      if (cuit.length == 2) {
        this.cuitAux = cuit + "-";
        this.form.controls['cuitForm'].setValue(this.cuitAux)
      }
      if (cuit.length == 9) {
        this.cuitAux += cuit.slice(3,8) + "-";
        this.form.controls['cuitForm'].setValue(this.cuitAux)
      }
    })*/
    
  }

  getCountry() {
    this.servicesCountry.get().subscribe((data) => {
      this.country = data
      this.countryName = this.country.map((item: any) => item.country)
      const countryNameConstAux = new Set(this.countryName);
      this.countryNameAux = [...countryNameConstAux]
    });

  }




  //primer from
  get codigoProveedorValido() {
    return this.form.get('codigoForm')?.invalid && this.form.get('codigoForm')?.touched;
  }

  get razonSocialValida() {
    return this.form.get('razonSocialForm')?.invalid && this.form.get('razonSocialForm')?.touched;
  }

  get rubroValido() {
    return this.form.get('rubroForm')?.invalid && this.form.get('rubroForm')?.touched;
  }

  get sitioWebValido() {
    return this.form.get('sitioWebForm')?.invalid && this.form.get('sitioWebForm')?.touched;
  }
  get sitioWebValido2() {
    let sitioweb = this.form.get('sitioWebForm')?.value;
    return sitioweb.replace(/(https?|ftp):\/\/[^\s/$.?#].[^\s].*(.com|.ar|.net|.br|web|=)$/g, "")
  }


  get condicionIvaValido() {
    return this.form.get('condicionIvaForm')?.invalid && this.form.get('condicionIvaForm')?.touched;
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


  //Segundo from
  get localidadValida() {
    return this.form.get('localidadForm')?.invalid && this.form.get('localidadForm')?.touched;
  }
  get localidadValida2() {
    let nombreLocalidad = this.form.get('localidadForm')?.value;
    return nombreLocalidad.replace(/[^0-9]/g, "").length
  }

  get provinciaValida() {
    return this.form.get('provinciaForm')?.invalid && this.form.get('provinciaForm')?.touched;
  }
  get provinciaValida2() {
    let nombreProvincia = this.form.get('provinciaForm')?.value;
    return nombreProvincia.replace(/[^0-9]/g, "").length
  }

  get paisValido() {
    return this.form.get('paisForm')?.invalid && this.form.get('paisForm')?.touched;
  }
  get paisValido2() {
    let nombrePais = this.form.get('paisForm')?.value;
    return nombrePais.replace(/[^0-9]/g, "").length
  }

  get calleValida() {
    return this.form.get('calleForm')?.invalid && this.form.get('calleForm')?.touched;
  }

  get numeroCalleValido() {
    return this.form.get('numeroCalleForm')?.invalid && this.form.get('numeroCalleForm')?.touched;
  }
  get numeroCalleValido2() {
    let numeroCalle = this.form.get('numeroCalleForm')?.value;
    return numeroCalle <= 0
  }

  get codigoPostalValido() {
    return this.form.get('codigoPostalForm')?.invalid && this.form.get('codigoPostalForm')?.touched;
  }
  get codigoPostalValido2() {
    let codigoPostal = this.form.get('codigoPostalForm')?.value;
    return codigoPostal <= 0
  }


  //Tercero from
  get cuitValido() {
    return this.form.get('cuitForm')?.invalid && this.form.get('cuitForm')?.touched;
  }

  get telefonoValido() {
    return this.form.get('telefonoForm')?.invalid && this.form.get('telefonoForm')?.touched;
  }

  get emailValido() {
    return this.form.get('emailForm')?.invalid && this.form.get('emailForm')?.touched;
  }
  get emailValido2() {
    let email = this.form.get('emailForm')?.value;
    return email.replace(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g, "").length
  }

  get nombreValido() {
    return this.form.get('nombreForm')?.invalid && this.form.get('nombreForm')?.touched;
  }
  get nombreValido2() {
    let nombrePais = this.form.get('nombreForm')?.value;
    return nombrePais.replace(/[^0-9]/g, "").length
  }

  get apellidoValido() {
    return this.form.get('apellidoForm')?.invalid && this.form.get('apellidoForm')?.touched;
  }
  get apellidoValido2() {
    let nombrePais = this.form.get('apellidoForm')?.value;
    return nombrePais.replace(/[^0-9]/g, "").length
  }

  get rolValido() {
    return this.form.get('rolForm')?.invalid && this.form.get('rolForm')?.touched;
  }

  get formInvalido() {
    let formularioToValidar = this.form.invalid;
    if (formularioToValidar) {
      return true
    }
    return false
  }

  guardar() {
    console.log(this.form.value)
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(controls => {
        controls.markAllAsTouched()
      })
    } else {
      let proveedorAdd = {
        id: this.idNuevo + 2,
        codigo: this.form.get('codigoForm')?.value,
        razonSocial: this.form.get('razonSocialForm')?.value,
        rubro: this.form.get('rubroForm')?.value,
        sitioWeb: this.form.get('sitioWebForm')?.value,
        condicionIva: this.form.get('condicionIvaForm')?.value,
        imagen: this.form.get('imagenForm')?.value,
        localidad: this.form.get('localidadForm')?.value,
        provincia: this.form.get('provinciaForm')?.value,
        pais: this.form.get('paisForm')?.value,
        calle: this.form.get('calleForm')?.value,
        numerocalle: this.form.get('numeroCalleForm')?.value,
        CP: this.form.get('codigoPostalForm')?.value,
        cuit: this.form.get('cuitForm')?.value,
        telefono: this.form.get('telefonoForm')?.value,
        email: this.form.get('emailForm')?.value,
        nombre: this.form.get('nombreForm')?.value,
        apellido: this.form.get('apellidoForm')?.value,
        rol: this.form.get('rolForm')?.value,
      }
      this.serviceProveedor.post(proveedorAdd).subscribe(res => {
        console.log("Se agrego un proveedor" + res)
        this.route.navigate(['/', 'proveedores'])
      });

    }

  }

  limpiar() {
    this.form.reset()
    this.ngOnInit()
  }
}
