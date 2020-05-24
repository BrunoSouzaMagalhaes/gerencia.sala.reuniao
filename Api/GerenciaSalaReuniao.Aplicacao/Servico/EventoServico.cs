using GerenciaSalaReuniao.Aplicacao.Base;
using GerenciaSalaReuniao.Dominio.Entidade;
using GerenciaSalaReuniao.Dominio.Interface.Repositorio;
using GerenciaSalaReuniao.Infra.EntityFramework.Repositorio;
using System;

namespace GerenciaSalaReuniao.Aplicacao.Servico
{
    public class EventoServico: ServicoBase<Evento>
    {
        private readonly IEventoRepositorio EventoRepo;

        public EventoServico()
        {
            EventoRepo = new EventoRepositorioEF();
            Repositorio = new EventoRepositorioEF();
        }

        public override void Inserir(Evento entidade, Boolean AutoIncremento = true)
        {
            if (!EstaValido(entidade))
            {
                throw new Exception("Esse horario não está disponível");
            }
            base.Inserir(entidade, AutoIncremento);
        }

        public override void Editar(Evento entidade)
        {
            if (!EstaValido(entidade))
            {
                throw new Exception("Esse horario não está disponível");
            }
            base.Editar(entidade);
        }

        public Boolean EstaValido(Evento evento)
        {
            Evento eventoAgendado = EventoRepo.ExisteEventoAgendado(evento);
            if (eventoAgendado != null)
            {
                string mensagem = String.Format(@"Este evento não pode ser salvo pois está em conflito 
                                                  com a reunião agendada pelo responsável {0} para {1} até {2}", 
                                                        eventoAgendado.Usuario.Nome, 
                                                        eventoAgendado.DataInicio, 
                                                        eventoAgendado.DataFim);
                throw new Exception(mensagem);
            }
            return true;
        }
    }
}
