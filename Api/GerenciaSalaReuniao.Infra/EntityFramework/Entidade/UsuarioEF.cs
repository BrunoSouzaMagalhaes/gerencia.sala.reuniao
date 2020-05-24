using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GerenciaSalaReuniao.Infra.EntityFramework.Entidade
{
    [Table("Usuario")]
    public class UsuarioEF
    {
        [Required, Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CodUsuario { get; set; }
        public string Nome { get; set; }
    }
}
