using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GerenciaSalaReuniao.Infra.EntityFramework.Entidade
{
    [Table("Evento")]
    public class EventoEF
    {
        [Required, Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodEvento { get; set; }
        public string Nome { get; set; }
        public int CodUsuario { get; set; }
        public int CodSala { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

        public virtual UsuarioEF Usuario{ get; set; }
        public virtual SalaEF Sala { get; set; }
    }
}
