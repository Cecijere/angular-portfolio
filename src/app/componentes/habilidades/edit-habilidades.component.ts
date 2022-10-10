import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardysoft } from 'src/app/model/hardysoft';
import { HardysoftService } from 'src/app/service/hardysoft.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  hardysoft: Hardysoft = null;

  constructor(private hardysoftS: HardysoftService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardysoftS.detail(id).subscribe(
      data => {
        this.hardysoft = data;
      }, err => {
        alert("No se pudo modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardysoftS.update(id,this.hardysoft).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo editar");
        this.router.navigate(['']);
      }
    )
  }

}
