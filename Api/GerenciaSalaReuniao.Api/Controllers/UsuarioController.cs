using GerenciaSalaReuniao.Api.Base;
using GerenciaSalaReuniao.Aplicacao.Servico;
using GerenciaSalaReuniao.Dominio.Entidade;

namespace GerenciaSalaReuniao.Api.Controllers
{
    public class UsuarioController : CadastroBase<Usuario>
    {
        public UsuarioController(): base(new UsuarioServico())
        {
           
        }
    }
}
