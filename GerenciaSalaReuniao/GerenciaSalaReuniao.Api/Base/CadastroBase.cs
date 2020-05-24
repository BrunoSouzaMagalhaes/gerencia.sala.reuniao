using Gerencia.Sala.Reuniao.Dominio.Entidade;
using GerenciaSalaReuniao.Aplicacao.Servico;
using GerenciaSalaReuniao.Dominio.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace GerenciaSalaReuniao.Api.Base
{
    public abstract class CadastroBase<EDominio> : ApiController, IControle<EDominio> where EDominio : class
    {
        protected readonly IServico<EDominio> service;

        public CadastroBase() { }
        public CadastroBase(IServico<EDominio> _servico)
        {
            service = _servico;
        }

        public virtual void Delete(int id)
        {
            try
            {
                service.Excluir(id);
            }
            catch (Exception ex)
            {
                Erro _erro = new GerenciadorErroService().TrataErro(ex);
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.NotFound, _erro.Mensagem));
            }
        }

        public virtual IEnumerable<EDominio> Get()
        {
            try
            {
                return service.BuscarTodos();
            }
            catch (Exception ex)
            {
                Erro _erro = new GerenciadorErroService().TrataErro(ex);
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.NotFound, _erro.Mensagem));
            }
        }

        public virtual EDominio Get(int id)
        {
            try
            {
                return service.BuscarPorId(id);
            }
            catch (Exception ex)
            {
                Erro _erro = new GerenciadorErroService().TrataErro(ex);
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.NotFound, _erro.Mensagem));
            }
        }

        public virtual void Post(EDominio Entidade)
        {
            try
            {
                service.Inserir(Entidade);
            }
            catch (Exception ex)
            {
                Erro _erro = new GerenciadorErroService().TrataErro(ex);
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.NotFound, _erro.Mensagem));
            }
        } 

        public virtual void Put(EDominio Entidade)
        {
            try
            {
                service.Editar(Entidade);
            }
            catch (Exception ex)
            {
                Erro _erro = new GerenciadorErroService().TrataErro(ex);
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.NotFound, _erro.Mensagem));
            }
        }
    }
}