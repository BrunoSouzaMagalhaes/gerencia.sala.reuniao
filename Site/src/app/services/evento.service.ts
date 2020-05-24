import { IServico } from './../Interface/IServico';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroBaseService } from './cadastro-base.service';

@Injectable({
  providedIn: 'root'
})
export class EventoService extends CadastroBaseService {

  public rota = environment.urlApi + '/evento';
  constructor(protected _http: HttpClient) {
    super(_http);
  }


}
