export class CadastroBaseVM {

  private agGridBreakWordsHeadersChidren(event) {
    const linhas = document.querySelectorAll('.ag-theme-balham .ag-header-group-cell-label span');
    Array.from(linhas).forEach(function(e) {
      e['style'].whiteSpace =  'normal';
      e['style'].lineHeight =  '14px';
      e['style'].textAlign =  'center';
    });
  }

  agGridBreakWordsHeaders(event) {
    const linhas = document.querySelectorAll('.ag-theme-balham div :nth-child(2) span');
    Array.from(linhas).forEach(function(e) {
      e['style'].whiteSpace =  'normal';
      e['style'].lineHeight =  '14px';
      e['style'].textAlign =  'center';
    });
    this.agGridBreakWordsHeadersChidren(event);
  }

  agGridSizeChanged(params) {
    const gridWidth = params.api.gridCore.eGridDiv.parentElement.offsetWidth;
    const columnsToShow = [];
    const columnsToHide = [];
    let totalColsWidth = 0;
    const allColumns = params.columnApi.columnController.allDisplayedColumns;

    for (let i = 0; i < allColumns.length; i++) {
      const column = allColumns[i];
      totalColsWidth += column.getMinWidth();

      columnsToShow.push(column.colId);
    }

    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.api.sizeColumnsToFit();
  }

  /**
   *
   * @param entidade // Objeto que deseja validar
   * @param configValidar // {chave1: 'label campo', chave2: 'label campo'} ex:{IDC_TIPO_PLANE : 'Planejam. da Corrida'}
   */
  ConsisteDados(entidade: any, configValidar: any) {
    let mensagemErro = 'O campo NOME_CAMPO é obrigatório!';
    let passou = true;

    Object.keys(configValidar).forEach(key => {
      if (!passou) {
        return;
      }

      const campoValidar = entidade[key];
      const nmCampoTela = configValidar[key];
      if (!campoValidar) {
        mensagemErro = mensagemErro.replace('NOME_CAMPO', nmCampoTela);
        passou = false;
      }
    });

    if (!passou) {
      return {
        sucesso: false,
        msg: mensagemErro
      };
    }


    return {
      sucesso: true,
      msg: ''
    };
  }

}
