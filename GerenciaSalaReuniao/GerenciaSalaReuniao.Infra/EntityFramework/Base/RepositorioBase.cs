using AutoMapper;
using Gerencia.Sala.Reuniao.Dominio.Utilitario;
using GerenciaSalaReuniao.Dominio.Interface.Repositorio;
using GerenciaSalaReuniao.Infra.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace GerenciaSalaReuniao.Infra.EntityFramework.Base
{
    public abstract class RepositorioBase<EntidadeEF, EDominio> : IRepositorio<EDominio> 
        where EntidadeEF : class
        where EDominio : class
    {
        protected ContextoBb Db = new ContextoBb();
 
        public virtual IEnumerable<EDominio> BuscarTodos()
        {
            IEnumerable<EntidadeEF> entityEF =  Db.Set<EntidadeEF>().ToList();
            return Mapper.Map<IEnumerable<EntidadeEF>, IEnumerable<EDominio>>(entityEF);
        }

        public void Excluir(int EntidadeId)
        {
            EntidadeEF entityEF = Db.Set<EntidadeEF>().Find(EntidadeId);
            Db.Set<EntidadeEF>().Remove(entityEF);
            Db.SaveChanges();
        }

        public EDominio BuscarPorId(int EntityId)
        {
            EntidadeEF entidade = Db.Set<EntidadeEF>().Find(EntityId);
            return Mapper.Map<EntidadeEF, EDominio>(entidade);
        }

        public void Inserir(EDominio Entity, Boolean AutoIncremento = true)
        {
            if (AutoIncremento)
            {
                string nomeAtributoChavePrimaria = AtributoChavePrimaria();
                string valorProximaChavePrimaria = ProximoValorChavePrimaria();
                GerenciaClasse.DefineValorObjeto(nomeAtributoChavePrimaria, valorProximaChavePrimaria, Entity);
            }

            EntidadeEF entityEF = Mapper.Map<EDominio, EntidadeEF>(Entity);
            Db.Set<EntidadeEF>().Add(entityEF);
            Db.SaveChanges();
        }

        public void Editar(EDominio Entity)
        {
            EntidadeEF entityEF = Mapper.Map<EDominio, EntidadeEF>(Entity);
            Db.Entry(entityEF).State = EntityState.Modified;
            Db.SaveChanges();
        }
        
        public string ProximoValorChavePrimaria()
        {
            if (BuscarTodos().Count() == 0)
            {
                return "1";
            }

            long NEXT_ID = 1;
            try
            {
                string primaryKey = AtributoChavePrimaria();
                NEXT_ID = BuscarTodos().ToList().Max(i => Convert.ToInt64(GerenciaClasse.PegarAtributo(i, primaryKey))) + 1;
            }
            catch (Exception) {}
            return NEXT_ID.ToString();
        }

      

        public List<string> PegarChavesPrimaria()
        {
            ObjectContext objectContext = ((IObjectContextAdapter)Db).ObjectContext;
            ObjectSet<EntidadeEF> set = objectContext.CreateObjectSet<EntidadeEF>();

            List<String> keyNames = new List<String>();
            foreach (var key in set.EntitySet.ElementType.KeyMembers)
            {
                keyNames.Add(key.ToString());
            }
            return keyNames;

        }

        protected string AtributoChavePrimaria()
        {
            List<string> chaves = PegarChavesPrimaria();
            foreach (string key in chaves)
            {
                return key;
            }
            return String.Empty;
        }

    }
}
