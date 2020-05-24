using System.Collections.Generic;

namespace GerenciaSalaReuniao.Dominio.Interface
{
    public interface IControle<EDominio> where EDominio : class
    {
        // GET: api/teste
        IEnumerable<EDominio> Get();

        // GET: api/teste/5
        EDominio Get(int id);

        // POST: api/teste
        void Post(EDominio EDominio);

        // PUT: api/teste/5
        void Put(EDominio EDominio);

        // DELETE: api/teste/5
        void Delete(int id);
    }
}
