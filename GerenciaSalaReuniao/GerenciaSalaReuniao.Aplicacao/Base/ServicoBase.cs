using GerenciaSalaReuniao.Dominio.Interface;
using GerenciaSalaReuniao.Dominio.Interface.Repositorio;
using System;
using System.Collections.Generic;

namespace GerenciaSalaReuniao.Aplicacao.Base
{
    public abstract class ServicoBase<EDominio> : IServico<EDominio>
        where EDominio : class
    {
        protected IRepositorio<EDominio> Repositorio;

        public virtual void Excluir(int EntidadeId)
        {
            Repositorio.Excluir(EntidadeId);
        }

        public virtual IEnumerable<EDominio> BuscarTodos()
        {
            return Repositorio.BuscarTodos();
        }

        public virtual EDominio BuscarPorId(int EntidadeId)
        {
            return Repositorio.BuscarPorId(EntidadeId);
        }

        public virtual void Inserir(EDominio entidade, Boolean AutoIncremento = true)
        {
            Repositorio.Inserir(entidade, AutoIncremento);
        }

        public virtual void Editar(EDominio entidade)
        {
            Repositorio.Editar(entidade);
        }
    }
}
