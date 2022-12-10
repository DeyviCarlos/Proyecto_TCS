import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  titulo = "Registrar Usuario";

  data_usuarios = [
    {
      codigo: "1",
      ap_paterno: "Rivas",
      ap_materno: "Moreno",
      nombres: "Juan",
      dni: "56784895",
      rol: "Administrador",
      estado: "Activo"
    },
    {
      codigo: "2",
      ap_paterno: "Alvarez",
      ap_materno: "Diaz",
      nombres: "Maria",
      dni: "78456325",
      rol: "Vendedor",
      estado: "Activo"
    },
    {
      codigo: "3",
      ap_paterno: "Condori",
      ap_materno: "Vargas",
      nombres: "Daniel",
      dni: "57485681",
      rol: "Vendedor",
      estado: "Activo"
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
