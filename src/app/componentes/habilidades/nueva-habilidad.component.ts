import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardysoft } from 'src/app/model/hardysoft';
import { HardysoftService } from 'src/app/service/hardysoft.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private hardysoftS: HardysoftService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hardysoft = new Hardysoft(this.nombre, this.porcentaje);
    this.hardysoftS.save(hardysoft).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo crear");
        this.router.navigate(['']);
      }
    )
  }

}
