using AutoMapper;
using GerenciaSalaReuniao.Dominio.Entidade;
using GerenciaSalaReuniao.Dominio.Interface.Repositorio;
using GerenciaSalaReuniao.Infra.EntityFramework.Base;
using GerenciaSalaReuniao.Infra.EntityFramework.Entidade;
using System;
using System.Linq;

namespace GerenciaSalaReuniao.Infra.EntityFramework.Repositorio
{
    public class EventoRepositorioEF: RepositorioBase<EventoEF, Evento>, IEventoRepositorio
    {
        public Evento ExisteEventoAgendado(Evento evento)
        {
            EventoEF eventoAgendado = Db.Set<EventoEF>().Where(x =>
                                                                x.CodSala == evento.CodSala &&
                                                                x.CodEvento != evento.CodEvento &&
                                                                x.DataInicio < evento.DataFim &&
                                                                x.DataFim > evento.DataInicio
                                                            ).FirstOrDefault();
            return Mapper.Map<EventoEF, Evento>(eventoAgendado);
        }
    }
}
