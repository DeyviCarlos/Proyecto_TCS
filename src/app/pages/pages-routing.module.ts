import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EnfermedadesComponent } from './enfermedades/enfermedades.component';
import { TiposEntregasComponent } from './tipos-entregas/tipos-entregas.component';
import { VentasComponent } from './ventas/ventas.component';
import { ClientesComponent } from './clientes/clientes.component';

const router: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'usuarios', component: UsuariosComponent},
      {path:'categorias', component: CategoriasComponent},
      {path:'enfermedades', component: EnfermedadesComponent},
      {path:'tipos-entregas', component: TiposEntregasComponent},
      {path:'productos', component: ProductosComponent},
      {path:'ventas', component: VentasComponent},
      {path:'clientes', component: ClientesComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
