using GerenciaSalaReuniao.Api.Base;
using GerenciaSalaReuniao.Aplicacao.Servico;
using GerenciaSalaReuniao.Dominio.Entidade;

namespace GerenciaSalaReuniao.Api.Controllers
{
    public class SalaController : CadastroBase<Sala>
    {
        public SalaController(): base(new SalaServico())
        {
           
        }
    }
}
