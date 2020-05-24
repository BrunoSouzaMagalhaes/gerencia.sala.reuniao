using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GerenciaSalaReuniao.Infra.EntityFramework.Entidade
{
    [Table("Sala")]
    public class SalaEF
    {
        [Required, Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodSala { get; set; }
        public string Nome { get; set; }
    }
}
