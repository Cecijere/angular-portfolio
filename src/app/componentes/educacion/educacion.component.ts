import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarInputs() {
    let inputs = document.getElementsByClassName('editEduc')[0];
    inputs.setAttribute('style', 'display: block;');
  }

  ocultarInputs() {
    document
      .getElementsByClassName('editEduc')[0]
      .setAttribute('style', 'display: none');
  }

  guardarCambios() {
    let valorInstitucion = (<HTMLInputElement>document.getElementById('inputInstitucion'))
      .value;
    let valorCursado = (<HTMLInputElement>document.getElementById('inputCursado'))
      .value;
    let valorTitulo = (<HTMLInputElement>(
      document.getElementById('inputTitulo')
    )).value;
    let valorFecha = (<HTMLInputElement>(
      document.getElementById('inputFecha')
    )).value;

    if (valorInstitucion != '') {
      this.reemplazarTexto('institucion', valorInstitucion);
    }
    if (valorCursado != '') {
      this.reemplazarTexto('cursado', valorCursado);
    }
    if (valorTitulo != '') {
      this.reemplazarTexto('titulo', valorTitulo);
    }
    if (valorFecha != '') {
      this.reemplazarTexto('titulo', valorFecha);
    }
    this.ocultarInputs();
  }

  reemplazarTexto(elementId: string, value: string) {
    document.getElementById(elementId)!.innerHTML = value;
  }
}
