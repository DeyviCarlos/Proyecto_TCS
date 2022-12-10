import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  data_venta =[
    {
      codigo: '1',
      cliente: 'Juan Perez',
      fecha: '02/11/2022',
      tipo: 'Delivery',
      estado: 'En proceso',
      monto_total: '102',
      lista_productos: []
    },
    {
      codigo: '2',
      cliente: 'Maria Romero',
      fecha: '11/11/2022',
      tipo: 'Delivery',
      estado: 'Finalizado',
      monto_total: '70',
      lista_productos: []
    },
    {
      codigo: '3',
      cliente: 'Ana Quispe',
      fecha: '05/12/2022',
      tipo: 'En tienda',
      estado: 'Finalizado',
      monto_total: '82',
      lista_productos: []
    },
    {
      codigo: '4',
      cliente: 'Diego Alvarez',
      fecha: '06/11/2022',
      tipo: 'Delivery',
      estado: 'En proceso',
      monto_total: '135',
      lista_productos: []
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
