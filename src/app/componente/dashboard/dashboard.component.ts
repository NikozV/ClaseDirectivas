import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  titulo: string;

  public usuarios= [
    {nombre: 'Juan', apellido: 'Perez'},
    {nombre: 'Maria', apellido: 'Gomez'},
    {nombre: 'Pedro', apellido: 'Rodriguez'},
    {nombre: 'Luis', apellido: 'Gonzalez'},
    {nombre: 'Ana', apellido: 'Sanchez'},
    {nombre: 'Jose', apellido: 'Lopez'},
    {nombre: '', apellido: 'Garcia'},
    {nombre: 'Carlos', apellido: ''},
  ];

  constructor() {
    this.titulo = 'DIRECTIVAS ESTRUCTURALES';
  }
}
