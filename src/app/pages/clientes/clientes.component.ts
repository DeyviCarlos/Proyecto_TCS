import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  data_cliente = [
    {
      codigo: '1',
      nombre: 'Jose Chavez',
      correo: 'jchavez@gmail.com'
    },
    {
      codigo: '2',
      nombre: 'Rosa Merino',
      correo: 'rosa.m@gmail.com'
    },
    {
      codigo: '3',
      nombre: 'Luis Morales',
      correo: 'luis.morales@gmail.com'
    },
    {
      codigo: '4',
      nombre: 'Daniel Castro',
      correo: 'dcatro@gmail.com'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
