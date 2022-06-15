import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamposObrigatoriosComponent } from 'src/app/componentes/campos/campos-obrigatorios.component';
import { HomeComponent } from 'src/app/componentes/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campos', component: CamposObrigatoriosComponent },
  { path: 'campos/:id', component: CamposObrigatoriosComponent },

  { path: '', 
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})


export class RotasRoutingModule { }
