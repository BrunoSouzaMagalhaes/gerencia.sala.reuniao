import { Usuario } from './../../model/usuario';
import { ComumService } from './../../services/comum.service';
import { AlertaService } from './../../services/alerta.service';
import { CadastroBaseComponent } from './../cadastro-base/cadastro-base.component';
import { AgGridBrasilService } from './../../services/ag-grid-brasil-service.service';
import { EventoService } from '../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/model/evento';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material';
import { Operacao } from 'src/app/enum/operacao.enum';
import { Sala } from 'src/app/model/sala';
import { SalaService } from 'src/app/services/sala.service';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent extends CadastroBaseComponent implements OnInit {

  public usuarios: Array<Usuario>;
  public salas: Array<Sala>;

  constructor(
    private service: EventoService,
    private usuarioService: UsuarioService,
    private salaService: SalaService,
    private alerta: AlertaService,
    // private _serviceTraduzGrid: AgGridBrasilService
  ) {

    super();
    this.inicia(service);

    this.limparParametro();
    this.config.titulo = 'Cadastro de Eventos';

    this.formataGrid();
  }

  async ngOnInit() {
    this.Buscar();
    this.usuarios = await this.usuarioService.Buscar().toPromise();
    this.salas = await this.salaService.Buscar().toPromise();
  }

  formataGrid() {
    this.grid1.gridOptions.columnDefs = [
      { headerName: 'Cód. Evento', field: 'CodEvento' },
      { headerName: 'Evento', field: 'Nome', width: 400 },
      {
        headerName: 'Início', field: 'DataInicio', width: 300, valueFormatter: params => {
          return ComumService.DataBR(params.value);
        }
      },
      {
        headerName: 'Fim', field: 'DataFim', width: 300, valueFormatter: params => {
          return ComumService.DataBR(params.value);
        }
      },
      {
        headerName: 'Responsável', field: 'DodUsuario', valueFormatter: params => {
          return params.data.Usuario.Nome;
        }
      },
      {
        headerName: 'Sala', field: 'CodSala', valueFormatter: params => {
          return params.data.Sala.Nome;
        }
      },
    ];
  }

  limparParametro() {
    this.entidade = new Evento();
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
    this.servico.Excluir(this.entidade.CodEvento).subscribe(result => {
      this.alerta.diparar('Registro deletado com sucesso');
      this.telaModoInicial();
    }, erro => {
      this.alerta.disparaErroGenerico();
    });
  }

  efetivaInclusao() {
    this.service.Incluir(this.formataParaApi()).subscribe(result => {
      this.alerta.diparar('Registro adicionado com sucesso');
      this.telaModoInicial();
    }, resultErro => {
      if (resultErro.error.Message) {
        this.alerta.diparar(resultErro.error.Message, 10000);
      } else {
        this.alerta.disparaErroGenerico();
      }
    });
  }

  efetivaEdicao() {
    this.service.Editar(this.formataParaApi()).subscribe(result => {
      this.alerta.diparar('Registro editado com sucesso');
      this.telaModoInicial();
    }, resultErro => {
      if (resultErro.error.Message) {
        this.alerta.diparar(resultErro.error.Message, 10000);
      } else {
        this.alerta.disparaErroGenerico();
      }
    });
  }

  validaDados() {
    // valida campo vazio
    const configs = {
      Nome: 'Nome do Evento',
      CodUsuario: 'Responsável',
      CodSala: 'Sala',
      DataInicio: 'Data Início ',
      DataFim: 'Data Fim ',
    };

    const valido = this.vm.ConsisteDados(this.entidade, configs);
    if (!valido.sucesso) {
      return valido;
    }

    const dataFinalMaiorQueInicial = ComumService.DataEMaior(this.entidade.DataInicio, this.entidade.DataFim, 'DD/MM/YYYY HH:mm');
    if (dataFinalMaiorQueInicial) {
      return {
        sucesso: false,
        msg: 'A data final não pode ser menor que a inicial'
      };
    }

    return {
      sucesso: true,
      msg: ''
    };
  }

  formataParaApi(): Evento {
    const evento = ComumService.BreakRefObj(this.entidade) as Evento;
    evento['Usuario'] = null;
    evento['Sala'] = null;

    evento.DataInicio = ComumService.DataUSA(evento.DataInicio + ':00');
    evento.DataFim = ComumService.DataUSA(evento.DataFim + ':00');
    return evento;
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
