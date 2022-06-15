import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from 'src/app/service/servicos.service';
import { RetornoDados } from 'src/app/shared/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  retorno: RetornoDados[] = [];
  id!: any;

  constructor(
    private service: ServicosService,
    private activate: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.service.getDados().subscribe(dados => { this.retorno = dados } )
    
    
  }

  apagar(){

    this.id = this.retorno[0].id
    console.log("retorno", this.id);

    this.service.deletarDados(this.id).subscribe(() => 
      window.location.reload()
     )
  }
  
  

}
