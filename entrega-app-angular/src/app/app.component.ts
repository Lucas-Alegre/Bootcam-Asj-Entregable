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
  ngOnInit(): void {
    //localStorage.clear()
  }

  logeadoCorrecto = false
  logeadoInCorrecto = true
  valorUpdata = localStorage.getItem('signUpHabilitado');
  update: any;
  title = 'entrega-app-angular';
  isSideNavCollapsed = false;
  screenWidth = 0;

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
      this.logeadoCorrecto = false
      this.logeadoInCorrecto = true
    }
  }


  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
