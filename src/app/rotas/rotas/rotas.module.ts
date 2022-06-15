import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


import { RotasRoutingModule } from '../rotas/rotas-routing.module';
import { CamposObrigatoriosComponent } from '../../componentes/campos/campos-obrigatorios.component';
import { HomeComponent } from '../../componentes/home/home.component'



@NgModule({
  declarations: [
    CamposObrigatoriosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RotasRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers:  [
  ]
})
export class RotasModule { }
