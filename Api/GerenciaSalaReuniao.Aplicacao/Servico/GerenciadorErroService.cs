using Gerencia.Sala.Reuniao.Dominio.Entidade;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GerenciaSalaReuniao.Aplicacao.Servico
{
    public class GerenciadorErroService
    {
        public Erro TrataErro(Exception erro)
        {
            Erro _erro = new Erro() { Mensagem = erro.Message };

            // salvar log 

            return _erro;
        }
    }
}
