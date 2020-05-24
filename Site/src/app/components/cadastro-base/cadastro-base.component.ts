import { IServico } from './../../Interface/IServico';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICadastro } from '../../Interface/ICadastro';
import { CadastroBaseVM } from 'src/app/view-models/cadastro-base-vm';
import { Operacao } from 'src/app/enum/operacao.enum';
import { AgGridBrasilService } from 'src/app/services/ag-grid-brasil-service.service';
import { ComumService } from 'src/app/services/comum.service';

@Component({
  selector: 'app-cadastro-base',
  templateUrl: './cadastro-base.component.html',
  styleUrls: ['./cadastro-base.component.scss']
})
export class CadastroBaseComponent implements OnInit, ICadastro {

  @ViewChild('painel', { static: true }) painel: ElementRef;
  public config = {
    titulo: 'Cadastro de Eventos',
    painel: {
      width: null,
      height: null,
    }
  };

  public vm: CadastroBaseVM;
  public entidade: any;
  public operacao: Operacao;

  protected servico: IServico;

  public grid1 = {
    gridApi: null,
    columnApi: null,
    selecionado: null,
    gridOptions: {
      enableFilter: true,
      floatingFilter: true,
      enableSorting: true,
      enableColResize: true,
      rowSelection: 'single',
      columnDefs: [],
      rowData: []
    }
  };

  constructor() {
    this.vm = new CadastroBaseVM();
    this.operacao = Operacao.Pesquisar;
  }

  inicia(_servico: IServico) {
    this.servico = _servico;
  }

  ngOnInit() {
  }


  /* #region  aggrid */
  onGridReady(e) {
    this.grid1.gridApi = e.api;
    this.grid1.columnApi = e.columnApi;
  }
  /* #endregion */


  /* #region  CRUD */

  Buscar() {
    this.servico.Buscar().subscribe(result => {
      this.grid1.gridOptions.rowData = result as Array<any>;
    });
  }

  Incluir() {
  }

  Editar() {
  }

  Excluir() {
  }

  Cancelar() {
  }

  Salvar() {
  }
  /* #endregion */


  redimensionouPainel(e) {
    this.config.painel.height = e.height;
    this.config.painel.width = e.width;
  }

  trataDisabledInput() {
    if (this.operacao === Operacao.Inserir || this.operacao === Operacao.Alterar) {
      return false;
    }
    return true;
  }
}
