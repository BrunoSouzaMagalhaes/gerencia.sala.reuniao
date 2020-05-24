import { Component, OnInit } from '@angular/core';
import { CadastroBaseComponent } from '../cadastro-base/cadastro-base.component';
import { SalaService } from 'src/app/services/sala.service';
import { AlertaService } from 'src/app/services/alerta.service';
import { Sala } from 'src/app/model/sala';
import { Operacao } from 'src/app/enum/operacao.enum';
import { ComumService } from 'src/app/services/comum.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent extends CadastroBaseComponent implements OnInit {
  constructor(
    private service: SalaService,
    private alerta: AlertaService
  ) {

    super();
    this.inicia(service);

    this.limparParametro();
    this.config.titulo = 'Cadastro de Salas';

    this.formataGrid();
  }

  async ngOnInit() {
    this.Buscar();
  }

  formataGrid() {
    this.grid1.gridOptions.columnDefs = [
      { headerName: 'Cód. Sala', field: 'CodSala' },
      { headerName: 'Sala', field: 'Nome' }
    ];
  }

  limparParametro() {
    this.entidade = new Sala();
  }

  Cancelar() {
    if (!confirm('Deseja Cancelar?')) {
      return;
    }
    this.telaModoInicial();
  }

  Salvar() {
    const valido = this.validaDados();
    if (!valido.sucesso) {
      this.alerta.diparar(valido.msg);
      return;
    }

    if (this.operacao === Operacao.Inserir) {
      this.efetivaInclusao();
    } else if (this.operacao === Operacao.Alterar) {
      this.efetivaEdicao();
    }
  }

  Excluir() {
    if (!confirm('Você confirma a exclusão desse registro?')) {
      return;
    }
    this.servico.Excluir(this.entidade.CodSala).subscribe(result => {
      this.alerta.diparar('Registro deletado com sucesso');
      this.telaModoInicial();
    }, errro => {
      this.alerta.disparaErroGenerico();
    });
  }

  efetivaInclusao() {
    this.service.Incluir(this.formataParaApi()).subscribe(result => {
      this.alerta.diparar('Registro adicionado com sucesso');
      this.telaModoInicial();
    }, errro => {
      this.alerta.disparaErroGenerico();
    });
  }

  efetivaEdicao() {
    this.service.Editar(this.formataParaApi()).subscribe(result => {
      this.alerta.diparar('Registro editado com sucesso');
      this.telaModoInicial();
    }, errro => {
      this.alerta.disparaErroGenerico();
    });
  }

  validaDados() {
    // valida campo vazio
    const configs = {
      Nome: 'Nome do Sala',
    };

    return this.vm.ConsisteDados(this.entidade, configs);
  }

  formataParaApi(): Sala {
    return ComumService.BreakRefObj(this.entidade) as Sala;
  }

  telaModoInicial() {
    this.operacao = Operacao.Pesquisar;
    this.limparParametro();
    this.Buscar();
  }

  onSelectionChanged(e) {
    const selecionados = this.grid1.gridApi.getSelectedRows();
    if (selecionados[0]) {
      this.grid1.selecionado = selecionados.shift();

      this.entidade = ComumService.BreakRefObj(this.grid1.selecionado);
      this.entidade.DataInicio = ComumService.DataBR(this.entidade.DataInicio);
      this.entidade.DataFim = ComumService.DataBR(this.entidade.DataFim);

      this.operacao = Operacao.Consultar;
    } else {
      this.grid1.selecionado = null;
    }
  }
}
