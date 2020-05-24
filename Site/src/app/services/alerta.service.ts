import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private _snackBar: MatSnackBar) { }

  diparar(mensagem: string, tempo: number = 5000, action: string = '') {
    this._snackBar.open(mensagem, action, {
      duration: tempo,
    });
  }

  disparaErroGenerico() {
    this._snackBar.open('Algo deu errado ao tentar realizar esta operação', null, {
      duration: 5000,
    });
  }
}
