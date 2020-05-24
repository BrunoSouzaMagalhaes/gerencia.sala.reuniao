using GerenciaSalaReuniao.Aplicacao.Base;
using GerenciaSalaReuniao.Dominio.Entidade;
using GerenciaSalaReuniao.Infra.EntityFramework.Repositorio;

namespace GerenciaSalaReuniao.Aplicacao.Servico
{
    public class SalaServico: ServicoBase<Sala>
    {
        public SalaServico()
        {
            Repositorio = new SalaRepositorioEF();
        }
    }
}
