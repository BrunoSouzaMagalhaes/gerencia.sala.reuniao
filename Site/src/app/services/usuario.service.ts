import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { CadastroBaseService } from './cadastro-base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CadastroBaseService {

  public rota = environment.urlApi + '/usuario';
  constructor(protected _http: HttpClient) {
    super(_http);
  }

}
