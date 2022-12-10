import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  titulo = "Registrar Producto"

  data_productos = [
    {
      codigo: "1",
      nombre: "Aceite",
      descripcion: "Aceite de ajonjolí de 250 ml",
      stock: "100",
      precio: "35",
      categoria: "Aceites Naturales",
      estado: "Activo"
    },
    {
      codigo: "2",
      nombre: "Aceite",
      descripcion: "Aceite de ajonjolí de 250 ml",
      stock: "200",
      precio: "35",
      categoria: "Aceites Naturales",
      estado: "Activo"
    },
    {
      codigo: "3",
      nombre: "Aceite",
      descripcion: "Aceite de ajonjolí de 250 ml",
      stock: "300",
      precio: "35",
      categoria: "Aceites Naturales",
      estado: "Activo"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
