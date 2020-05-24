import { Operacao } from '../enum/operacao.enum';

export interface ICadastro {
    operacao: Operacao;
    Buscar();
    Incluir();
    Salvar();
    Editar();
    Excluir();
    Cancelar();
}
