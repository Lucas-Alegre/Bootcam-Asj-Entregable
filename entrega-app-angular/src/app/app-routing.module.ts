import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { OrdenCompraComponent } from './orden-compra/orden-compra.component';

const routes: Routes = [
  {path: '', redirectTo: 'productos', pathMatch: 'full'},
  {path: 'productos', component: ProductosComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'orden-compra', component: OrdenCompraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
