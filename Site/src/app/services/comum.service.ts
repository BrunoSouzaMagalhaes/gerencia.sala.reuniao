import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ComumService {

  constructor( ) {
  }

  public static isEmpty(data: any) {
    if (data === undefined || data === '' || data === null || data === 'undefined') {
      return true;
    }
    return false;
  }

  public static redirect(params: Array<any>) {
    window.location.href = params.join('/');
  }

  public static preloaderShow() {
    document.getElementById('preloader').style.display = 'block';
  }

  public static preloaderHide() {
    document.getElementById('preloader').style.display = 'none';
  }


  static DataUSA(data: string) {
    if (!data) {
      return data;
    }
    return moment(data, 'DD/MM/YYYY HH:mm:ss').format('YYYY/MM/DD HH:mm:ss');
  }

  static DataBR(data: string, format?: string) {
    if (!data) {
      return '';
    }

    if (format) {
      return  moment(data, 'America/Sao_Paulo').format(format);
    }

    if (data.indexOf('T') !== -1)  {
      return moment(data, 'YYYY-MM-DDTHH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
    }
    return moment(data, 'YYYY-MM-DD').format('DD/MM/YYYY');
  }

  static AutoMapper(classeDe: any, classePara: any) {
    if (!classeDe || !classePara) {
      return;
    }

    Object.keys(classeDe).forEach(key1 => {
      Object.keys(classePara).forEach(key2 => {
        if (key1 === key2) {
          classePara[key2] = classeDe[key1];
        }
      });
    });
    return classePara;
  }


  static IsValidDate(data: string) {
    const d = moment(data, 'D/M/YYYY');
    if (d == null || !d.isValid()) {
      return false;
    }
    return data.indexOf(d.format('D/M/YYYY')) >= 0
      || data.indexOf(d.format('DD/MM/YYYY')) >= 0
      || data.indexOf(d.format('D/M/YY')) >= 0
      || data.indexOf(d.format('DD/MM/YY')) >= 0;
  }

  static DataEMaior(maior: string, menor: string, formato?: string): Boolean {
    const mMaior = moment(maior, formato);
    const mMenor = moment(menor, formato);
    return mMaior.diff(mMenor) > 0;
  }

  static BreakRefObj(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

}
