import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Operacao } from '../../../enum/operacao.enum';
import { ICadastro } from '../../../Interface/ICadastro';

@Component({
  selector: 'app-barra-botao',
  templateUrl: './barra-botao.component.html',
  styleUrls: ['./barra-botao.component.scss']
})
export class BarraBotaoComponent implements OnInit {

  @Input() Tela: ICadastro;
  @Input('operacao') set setMudouOperacao(e: Operacao) {
    this.TratarBotoes();
  }
  // @Output() Clicou = new EventEmitter();

  public ativo  = {
    buscar: false,
    incluir: false,
    editar: false,
    excluir: false,
    salvar: false,
    cancelar: false,
  };

  constructor() { }

  ngOnInit() {
    this.TratarBotoes();
  }

  Buscar() {
    this.Tela.Buscar();
  }

  Inserir() {
    this.Tela.operacao = Operacao.Inserir;
    this.Tela.Incluir();
  }

  Editar() {
    this.Tela.operacao = Operacao.Alterar;
    this.Tela.Editar();
  }

  Excluir() {
    this.Tela.operacao = Operacao.Excluir;
    this.Tela.Excluir();
  }

  Salvar() {
    this.Tela.Salvar();
  }

  Cancelar() {
    this.Tela.operacao = Operacao.Pesquisar;
    this.Tela.Cancelar();
  }

  TratarBotoes() {
    switch (this.Tela.operacao) {
      case Operacao.Alterar:
      case Operacao.Inserir:
        this.ativo  = {
          buscar: false,
          incluir: false,
          editar: false,
          excluir: false,
          salvar: true,
          cancelar: true,
        };
      break;
      case Operacao.Consultar:
        this.ativo  = {
          buscar: true,
          incluir: false,
          editar: true,
          excluir: true,
          salvar: true,
          cancelar: true,
        };
      break;
      default:
        this.ativo  = {
          buscar: true,
          incluir: true,
          editar: false,
          excluir: false,
          salvar: false,
          cancelar: false,
        };
      break;
    }
  }
}
