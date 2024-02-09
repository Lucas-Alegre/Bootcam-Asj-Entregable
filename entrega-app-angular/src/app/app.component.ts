import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  existeUnUser: any;;
  logeadoCorrecto = false
  logeadoInCorrecto = true
  estoyLogueado: boolean = false;
  valorUpdata = localStorage.getItem('signUpHabilitado');
  update: any;
  title = 'entrega-app-angular';
  isSideNavCollapsed = false;
  screenWidth = 0;

  ngOnInit(): void {
    //localStorage.clear()
    this.existeUnUser = localStorage.getItem('userEncontrado');
    if (this.existeUnUser.length > 0) {
      this.estoyLogueado = true;
      this.logeadoInCorrecto = false;
      this.logeadoCorrecto = true
    }
  }

  recibirMensaje(bool: boolean) {
    console.log("Valido login")
    console.log(bool)
    if (bool == true) {
      this.logeadoCorrecto = true
      this.logeadoInCorrecto = false
    } else {
      console.log("No puedo entrar")
    }
  }
  salir(bool: boolean) {
    if (bool) {
      localStorage.setItem('userEncontrado', '');
      this.estoyLogueado = false
      this.logeadoCorrecto = false
      this.logeadoInCorrecto = true
    }
  }


  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
