import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-entregas',
  templateUrl: './tipos-entregas.component.html',
  styleUrls: ['./tipos-entregas.component.css']
})
export class TiposEntregasComponent implements OnInit {

  titulo = "Registar Tipo de Entrega";

  data_tipo_entrega = [
    {
      codigo: "1",
      nombre: "Delivery",
      estado: "Activo"
    },
    {
      codigo: "2",
      nombre: "En tienda",
      estado: "Activo"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
