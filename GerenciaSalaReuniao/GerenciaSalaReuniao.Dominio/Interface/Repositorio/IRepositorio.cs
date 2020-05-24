using System;
using System.Collections.Generic;

namespace GerenciaSalaReuniao.Dominio.Interface.Repositorio
{
    public interface IRepositorio<EDominio> where EDominio : class
    {
        void Inserir(EDominio Entidade, Boolean AutoIncremento = true);
        void Editar(EDominio Entidade);
        IEnumerable<EDominio> BuscarTodos();
        EDominio BuscarPorId(int EntidadeId);
        void Excluir(int Entidade);
    }
}
