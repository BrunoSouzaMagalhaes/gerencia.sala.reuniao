import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgGridBrasilService {

  constructor() { }

  public localeTextAgGrid = {
    filterOoo: 'Filtrar ...',
    notEqual: 'Diferente',
    equals: 'Igual',
    lessThan: 'Menor que',
    greaterThan: 'Maior que',
    notContains: 'Não contém',
    contains: 'Contém',
    endsWith: 'Termina com',
    startsWith: 'Inicia com',
    noRowsToShow: 'Nenhum resultados',
  };

}
