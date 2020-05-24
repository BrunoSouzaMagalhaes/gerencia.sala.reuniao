import { Injectable } from '@angular/core';
import { IServico } from '../Interface/IServico';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroBaseService implements IServico {

  public rota = environment.urlApi;

  constructor(protected _http: HttpClient) { }

  Buscar(): Observable<any> {
    return this._http.get(this.rota);
  }

  Incluir(entidade: any): Observable<any> {
    return this._http.post(this.rota, entidade);
  }

  Editar(entidade: any): Observable<any> {
    return this._http.put(this.rota, entidade);
  }

  Excluir(id: number): Observable<any> {
    return this._http.delete(this.rota + '/' + id);
  }
}
