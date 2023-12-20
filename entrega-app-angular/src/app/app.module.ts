import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './pages/body/body.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosComponent } from './componentes/productos/listado/productos.component';
import { ProveedoresComponent } from './componentes/proveedores/listado/proveedores.component';
import { OrdenCompraComponent } from './componentes/orden-compra/listado/orden-compra.component';
import { FormAgregarProductoComponent } from './componentes/productos/form/form-agregar/form-agregar-producto.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosService } from './services/producto/productos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormEditarComponent } from './componentes/productos/form/form-editar/form-editar.component';

import { FormAgregarProveedorComponent } from './componentes/proveedores/form/form-agregar-proveedor/form-agregar-proveedor.component';
import { FormEditarProveedorComponent } from './componentes/proveedores/form/form-editar-proveedor/form-editar-proveedor.component';
import { ProveedoresService } from './services/proveedores/proveedores.service';
import { OrdenCompraService } from './services/orden-de-compra/orden-compra.service';
import { FormAgregarOrdenCompraComponent } from './componentes/orden-compra/form/form-agregar-orden-compra/form-agregar-orden-compra.component';
import { FormEditarOrdenCompraComponent } from './componentes/orden-compra/form/form-editar-orden-compra/form-editar-orden-compra.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ProductosComponent,
    ProveedoresComponent,
    OrdenCompraComponent,
    FormAgregarProductoComponent,
    FormEditarComponent,
    FormAgregarProveedorComponent,
    FormEditarProveedorComponent,
    FormAgregarOrdenCompraComponent,
    FormEditarOrdenCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductosService,ProveedoresService,OrdenCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
