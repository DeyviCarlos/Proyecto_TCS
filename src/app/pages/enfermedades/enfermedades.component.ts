import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.css']
})
export class EnfermedadesComponent implements OnInit {

  titulo = "Registrar Enfermedad";

  data_enfermedades = [
    {
      codigo: "1",
      nombre: "Gastritis",
      descripcion: "Consiste en la inflamación del revestimiento del estomago",
      estado: "Activo"
    },
    {
      codigo: "2",
      nombre: "Reumatismo",
      descripcion: "Enfermedades que afectan a las articulaciones y producen hinchazón",
      estado: "Activo"
    },
    {
      codigo: "3",
      nombre: "Higado Graso",
      descripcion: "Afección en la que se acumula grasa en el hígado",
      estado: "Activo"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
