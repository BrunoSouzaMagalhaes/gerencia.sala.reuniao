using GerenciaSalaReuniao.Aplicacao.Base;
using GerenciaSalaReuniao.Dominio.Entidade;
using GerenciaSalaReuniao.Infra.EntityFramework.Repositorio;

namespace GerenciaSalaReuniao.Aplicacao.Servico
{
    public class UsuarioServico: ServicoBase<Usuario>
    {
        public UsuarioServico()
        {
            Repositorio = new UsuarioRepositorioEF();
        }
    }
}
