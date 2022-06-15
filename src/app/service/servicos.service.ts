import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Dados, RetornoDados } from '../shared/data.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor( private http: HttpClient) { }

  url: string = 'http://localhost:3000/dados';

  getDados(): Observable<RetornoDados[]>{
    
    return this.http.get<RetornoDados[]>(this.url)
     .pipe(
       retry(3)
     )
  } 


 salvarDados(dados: Dados): Observable<any>{
   console.log("Dados salvo", dados);
   return this.http.post<Dados>(this.url, dados)
    .pipe(
      retry(3)
    )
 } 

 deletarDados(id: string): Observable<any> {
   
   const _url = `${this.url}/${id}`;
   console.log(_url);
  return this.http.delete<any>(_url)
}
 
}
