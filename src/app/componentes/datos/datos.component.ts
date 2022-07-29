import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mostrarInputs() {
    let inputs = document.getElementsByClassName('editInputs')[0];
    inputs.setAttribute('style', 'display: block;');
  }

  ocultarInputs() {
    document
      .getElementsByClassName('editInputs')[0]
      .setAttribute('style', 'display: none');
  }

  guardarCambios() {
    let valorNombre = (<HTMLInputElement>document.getElementById('inputNombre'))
      .value;
    let valorPuesto = (<HTMLInputElement>document.getElementById('inputPuesto'))
      .value;
    let valorUbicacion = (<HTMLInputElement>(
      document.getElementById('inputUbicacion')
    )).value;
    if (valorNombre != '') {
      this.reemplazarTexto('nombre', '<b>' + valorNombre + '</b>');
    }
    if (valorPuesto != '') {
      this.reemplazarTexto('puesto', valorPuesto);
    }
    if (valorUbicacion != '') {
      this.reemplazarTexto('ubicacion', valorUbicacion);
    }
    this.ocultarInputs();
  }

  reemplazarTexto(elementId: string, value: string) {
    document.getElementById(elementId)!.innerHTML = value;
  }
}