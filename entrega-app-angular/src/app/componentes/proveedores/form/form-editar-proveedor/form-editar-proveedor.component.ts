import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country/country.service';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-form-editar-proveedor',
  templateUrl: './form-editar-proveedor.component.html',
  styleUrls: ['./form-editar-proveedor.component.css']
})
export class FormEditarProveedorComponent {
  listaCategorias: any = ["Tecnológico", "Vehículo", "Moda", "Hogar y mueble"]
  listaRoles: any = ["usuario", "admin"]
  listaCondicionIva: any = ["IVA Responsable Inscripto", "IVA Responsable no Inscripto", "IVA no Responsable", "IVA Sujeto Ecento",
    "Condumidor Final", "Responsable Monotributo", "Sujeto no Categorizado", "Proveedor del Exterior", "Cliente del Exterior",
    "IVA Liberado", "Agente de Percepción", "Pequeño Contribuyente Eventual", "Monotributista Social", "Pequeño Contribuyente Eventual Social"]
  editarInvalido: boolean = false;
  nombreProducto = "";
  nombre: string = '';
  proveedor = "";
  categoria = "";
  imagen = "";
  descripcion = "";
  precio = "";
  idNuevo = 0;
  proveedorId: any;
  cuitAux: string = "";
  proveedorObjet: any = {};
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
    private route: Router,
    private _activateRoute: ActivatedRoute,
    private servicesCountry: CountryService) { }


  ngOnInit(): void {
    this.proveedorId = this._activateRoute.snapshot.paramMap.get('id');
    this.serviceProveedor.getById(this.proveedorId).subscribe(data => {
      this.proveedorObjet = data;

      console.log(this.proveedorObjet)
      this.form = this.formBuilder.group({
        codigoForm: [`${this.proveedorObjet.codigo}`, [Validators.required, Validators.minLength(4)]],
        razonSocialForm: [`${this.proveedorObjet.razonSocial}`, [Validators.required, Validators.minLength(2)]],
        rubroForm: [`${this.proveedorObjet.rubro}`, [Validators.required]],
        sitioWebForm: [`${this.proveedorObjet.sitioWeb}`, [Validators.required, Validators.minLength(12)]],
        condicionIvaForm: [`${this.proveedorObjet.condicionIva}`, [Validators.required]],
        imagenForm: [`${this.proveedorObjet.imagen}`, [Validators.required, Validators.minLength(5)]],

        localidadForm: [`${this.proveedorObjet.localidad}`, [Validators.required, Validators.minLength(3)]],
        provinciaForm: [`${this.proveedorObjet.provincia}`, [Validators.required, Validators.minLength(2)]],
        paisForm: [`${this.proveedorObjet.pais}`, [Validators.required, Validators.minLength(3)]],
        calleForm: [`${this.proveedorObjet.calle}`, [Validators.required, Validators.minLength(3)]],
        numeroCalleForm: [`${this.proveedorObjet.numerocalle}`, [Validators.required, Validators.minLength(1)]],
        codigoPostalForm: [`${this.proveedorObjet.CP}`, [Validators.required, Validators.minLength(2)]],

        cuitForm: [`${this.proveedorObjet.cuit}`, [Validators.required, Validators.minLength(10)]],
        telefonoForm: [`${this.proveedorObjet.telefono}`, [Validators.required, Validators.minLength(6)]],
        emailForm: [`${this.proveedorObjet.email}`, [Validators.required, Validators.minLength(3)]],
        nombreForm: [`${this.proveedorObjet.nombre}`, [Validators.required, Validators.minLength(2)]],
        apellidoForm: [`${this.proveedorObjet.apellido}`, [Validators.required, Validators.minLength(2)]],
        rolForm: [`${this.proveedorObjet.rol}`, [Validators.required]]
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

    });



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

      this.stateToCountry = this.country.filter((item: any) => item.country == this.proveedorObjet.pais)
      this.stateToCountryName = this.stateToCountry.map((item: any) => item.subcountry);
      const stateToCountryConstName = new Set(this.stateToCountryName);
      this.stateToCountryName = [...stateToCountryConstName]

      this.citieToState = this.stateToCountry.filter((item: any) => item.subcountry == this.proveedorObjet.provincia)
      this.citieToStateByName = this.citieToState.map((item: any) => item.name);
      const citieToStateConstName = new Set(this.citieToStateByName);
      this.citieToStateByName = [...citieToStateConstName]
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
        id: this.proveedorId,
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
      let proveedorToCompare = {
        id: this.proveedorId,
        codigo: this.proveedorObjet.codigo,
        razonSocial: this.proveedorObjet.razonSocial,
        rubro: this.proveedorObjet.rubro,
        sitioWeb: this.proveedorObjet.sitioWeb,
        condicionIva: this.proveedorObjet.condicionIva,
        imagen: this.proveedorObjet.imagen,
        localidad: this.proveedorObjet.localidad,
        provincia: this.proveedorObjet.provincia,
        pais: this.proveedorObjet.pais,
        calle: this.proveedorObjet.calle,
        numerocalle: this.proveedorObjet.numerocalle,
        CP: this.proveedorObjet.CP,
        cuit: this.proveedorObjet.cuit,
        telefono: this.proveedorObjet.telefono,
        email: this.proveedorObjet.email,
        nombre: this.proveedorObjet.nombre,
        apellido: this.proveedorObjet.apellido,
        rol: this.proveedorObjet.rol
      }

      if (JSON.stringify(proveedorAdd) == JSON.stringify(proveedorToCompare)) {
        this.editarInvalido = true;
      } else {
        this.serviceProveedor.put(proveedorAdd, this.proveedorId).subscribe(res => {
          console.log("Se editó un producto" + res)
          this.route.navigate(['/', 'proveedores'])
        });
      }

    }

  }

  limpiar() {
    this.form.setValue({
      codigoForm: "", razonSocialForm: "", rubroForm: "", sitioWebForm: "", condicionIvaForm: "", imagenForm: "",
      localidadForm: "", provinciaForm: "", paisForm: "", calleForm: "", numeroCalleForm: "1", codigoPostalForm: "1",
      cuitForm: "", telefonoForm: "", emailForm: "", nombreForm: "", apellidoForm: "", rolForm: ""
    })

  }
}
