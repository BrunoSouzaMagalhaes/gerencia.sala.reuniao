using GerenciaSalaReuniao.Api.Base;
using GerenciaSalaReuniao.Aplicacao.Servico;
using GerenciaSalaReuniao.Dominio.Entidade;

namespace GerenciaSalaReuniao.Api.Controllers
{
    public class EventoController : CadastroBase<Evento>
    {
        public EventoController(): base(new EventoServico())
        {
           
        }
    }
}
