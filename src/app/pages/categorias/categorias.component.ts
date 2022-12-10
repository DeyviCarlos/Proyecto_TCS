import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  title = "Registrar Categoria";

  data_categoria = [
    {
      codigo: "1",
      nombre: "Bebidas",
      descripcion: "Aceites hechos a base de la sabila de diversas plantas",
      estado: "Activo"
    },
    {
      codigo: "2",
      nombre: "Aceites Naturales",
      descripcion: "Bebidas hechos con ingredientes naturales",
      estado: "Activo"
    },
    {
      codigo: "3",
      nombre: "Naturales",
      descripcion: "Plantas llegadas desde las distintas regiones del Perú",
      estado: "Activo"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
