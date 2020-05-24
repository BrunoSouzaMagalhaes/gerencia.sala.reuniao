import { Component, OnInit } from '@angular/core';
import { CadastroBaseComponent } from '../cadastro-base/cadastro-base.component';
import { UsuarioService } from 'src/app/services/Usuario.service';
import { AlertaService } from 'src/app/services/alerta.service';
import { Operacao } from 'src/app/enum/operacao.enum';
import { ComumService } from 'src/app/services/comum.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent extends CadastroBaseComponent implements OnInit {
  constructor(
    private service: UsuarioService,
    private alerta: AlertaService
  ) {

    super();
    this.inicia(service);

    this.limparParametro();
    this.config.titulo = 'Cadastro de Usuários';

    this.formataGrid();
  }

  async ngOnInit() {
    this.Buscar();
  }

  formataGrid() {
    this.grid1.gridOptions.columnDefs = [
      { headerName: 'Cód. Usuario', field: 'CodUsuario' },
      { headerName: 'Usuario', field: 'Nome' }
    ];
  }

  limparParametro() {
    this.entidade = new Usuario();
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
    this.servico.Excluir(this.entidade.CodUsuario).subscribe(result => {
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
      Nome: 'Nome do Usuario',
    };

    return this.vm.ConsisteDados(this.entidade, configs);
  }

  formataParaApi(): Usuario {
    return ComumService.BreakRefObj(this.entidade) as Usuario;
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
