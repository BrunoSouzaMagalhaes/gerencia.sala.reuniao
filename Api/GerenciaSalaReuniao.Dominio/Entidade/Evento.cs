
using System;

namespace GerenciaSalaReuniao.Dominio.Entidade
{
    public class Evento
    {
        public int CodEvento { get; set; }
        public string Nome { get; set; }
        public int CodSala { get; set; }
        public int CodUsuario { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

        public virtual Sala Sala { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}
