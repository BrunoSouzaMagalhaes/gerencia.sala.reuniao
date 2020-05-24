using GerenciaSalaReuniao.Dominio.Entidade;
using System;

namespace GerenciaSalaReuniao.Dominio.Interface.Repositorio
{
    public interface IEventoRepositorio
    {
        Evento ExisteEventoAgendado(Evento evento);
    }
}
