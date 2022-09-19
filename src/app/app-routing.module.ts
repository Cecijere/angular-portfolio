import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaeduc', component: NuevaEducacionComponent},
  {path:'editeduc/:id', component: EditEducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
