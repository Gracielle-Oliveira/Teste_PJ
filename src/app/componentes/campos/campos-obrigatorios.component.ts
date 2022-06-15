import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServicosService } from 'src/app/service/servicos.service';
import { Dados, RetornoDados } from 'src/app/shared/data.model';

@Component({
  selector: 'campos-obrigatorios',
  templateUrl: './campos-obrigatorios.component.html',
  styleUrls: ['./campos-obrigatorios.component.scss']
})
export class CamposObrigatoriosComponent implements OnInit {

 public i: any;
 public resultado!: any;
 public dados!: Dados;
 formCampos: FormGroup = new FormGroup({});
 toast: boolean = false
 id: any;
 info: RetornoDados[] = [];
 infoTel: any;
 desabilitar: boolean = false;
 maskCpf = "000.000.000-00";
 maskTel = "(00) 00000-0000";
 telDuplicado: any;

  constructor( 
    private router: Router,
    private fbBuilde: FormBuilder,
    private service: ServicosService,
    ) { }

  ngOnInit(): void {
    this.criarForm();
    // this.getAqui();
    
    
  }

  criarForm(){
    this.formCampos = this.fbBuilde.group({
      nome: this.fbBuilde.control('', [Validators.required]),
      cpf: this.fbBuilde.control('', [Validators.required]),
      telefone: this.fbBuilde.control('', [Validators.required]),
    })
  }

  getAqui(){
    this.service.getDados().subscribe(dados =>  {
      
      this.info = dados
      this.info.forEach(element => {
        
        this.infoTel = element.telefone
        this.telDuplicado = this.infoTel.match(this.infoTel)
        
        }
      )
     
    })
  }

  
  getErrorMessage(intup: string) {
    return this.formCampos.controls[intup].invalid &&
            this.formCampos.controls[intup].touched &&
            this.formCampos.controls[intup].errors
  }

  

  salvar(){

      this.service.salvarDados(this.formCampos.value).subscribe( resp =>{
      this.router.navigate(['/'])
      })
  }

  voltar(){
    window.history.back()
    this.router.navigate(['/'])
  }
}


