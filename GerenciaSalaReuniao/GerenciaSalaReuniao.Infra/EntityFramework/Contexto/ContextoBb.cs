using GerenciaSalaReuniao.Infra.EntityFramework.Entidade;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciaSalaReuniao.Infra.Repositorio.Contexto
{
    public class ContextoBb: DbContext
    {
        public ContextoBb(): base(GetConnectString())
        {
            Database.Log = log => Debug.WriteLine(log);
        }

        private static string GetConnectString()
        {
            string connectionString = String.Empty;
            string ambiente = ConfigurationManager.AppSettings["Ambiente"];
            if (ambiente == "DEV")
            {
                connectionString = String.Format("name={0}", "conectionStringDEV");
            }
            else if (ambiente == "PROD")
            {
                connectionString = String.Format("name={0}", "conectionStringPROD");
            }
            return connectionString;
        }

        DbSet<UsuarioEF> Usuario { get; set; }
        DbSet<SalaEF> Sala { get; set; }
        DbSet<EventoEF> Evento { get; set; }
    }
}
