using AutoMapper;
using AutoMapper.Extensions.ExpressionMapping;
using GerenciaSalaReuniao.Dominio.Entidade;
using GerenciaSalaReuniao.Infra.EntityFramework.Entidade;

namespace GerenciaSalaReuniao.Infra.AutoMapper
{
    public abstract class AutoMapperConfig
    {
        public static void RegistrarMapeamento()
        {
            Mapper.Initialize(am => {
                am.AddExpressionMapping();

                am.CreateMap<Usuario, UsuarioEF>().ReverseMap();
                am.CreateMap<Sala, SalaEF>().ReverseMap();
                am.CreateMap<Evento, EventoEF>().ReverseMap();

            });
        }
       
    }
}
