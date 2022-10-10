import { Component, OnInit } from '@angular/core';
import { Hardysoft } from 'src/app/model/hardysoft';
import { HardysoftService } from 'src/app/service/hardysoft.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  hardysoft: Hardysoft[] = [];

  constructor(private hardysoftS: HardysoftService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHardysoft();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarHardysoft(): void {
    this.hardysoftS.lista().subscribe(
      data => {
        this.hardysoft = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.hardysoftS.delete(id).subscribe(
        data => {
          this.cargarHardysoft();
        }, err => {
          alert ("No se pudo eliminar");
        }
      )
    }
  }
}
