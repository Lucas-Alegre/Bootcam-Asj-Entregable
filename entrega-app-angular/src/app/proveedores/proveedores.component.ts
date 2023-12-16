import { Component } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  productos = [
    {
      email: "lucasalegre.web@gmail.com",
      rubro: "Tecnologico",
      direccion: "Concordia-Entre Rios-Argentina",
      cuit: "37-43343434-4",
      nombreCompleto: "Lucas Alegre",
      telefono: 3456787898
    },
    {
      email: "alegre.extra.web@gmail.com",
      rubro: "Biolologico",
      direccion: "Concordia-Entre Rios-Argentina",
      cuit: "37-43343434-4",
      nombreCompleto: "Otro Sujeto",
      telefono: 3456787898
    },
    {
      email: "lucasalegre.web@gmail.com",
      rubro: "Tecnologico",
      direccion: "Concordia-Entre Rios-Argentina",
      cuit: "37-43343434-4",
      nombreCompleto: "Lucas Alegre",
      telefono: 3456787898
    },
    {
      email: "lucasalegre.web@gmail.com",
      rubro: "Tecnologico",
      direccion: "Concordia-Entre Rios-Argentina",
      cuit: "37-43343434-4",
      nombreCompleto: "Lucas Alegre",
      telefono: 3456787898
    },
    {
      email: "lucasalegre.web@gmail.com",
      rubro: "Tecnologico",
      direccion: "Concordia-Entre Rios-Argentina",
      cuit: "37-43343434-4",
      nombreCompleto: "Lucas Alegre",
      telefono: 3456787898
    },
  ]
  editProduct(product: any) {

  }
  deleteProduct(product: any) {

  }
}
