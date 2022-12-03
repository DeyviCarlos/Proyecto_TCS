import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EnfermedadesComponent } from './enfermedades/enfermedades.component';
import { TiposEntregasComponent } from './tipos-entregas/tipos-entregas.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    CategoriasComponent,
    EnfermedadesComponent,
    TiposEntregasComponent,
    ProductosComponent,
    VentasComponent,
    ClientesComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    DashboardComponent,
    UsuariosComponent,
    CategoriasComponent,
    EnfermedadesComponent,
    TiposEntregasComponent,
    ProductosComponent,
    VentasComponent,
    ClientesComponent,
  ]
})
export class PagesModule { }
