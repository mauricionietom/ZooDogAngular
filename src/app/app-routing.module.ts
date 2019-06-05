import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerroComponent } from './perro/perro.component';

const routes: Routes = [

  {
    path: "perro/:puesto",
    component: PerroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
