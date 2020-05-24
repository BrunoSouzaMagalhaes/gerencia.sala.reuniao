using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Gerencia.Sala.Reuniao.Dominio.Utilitario
{
    public static class GerenciaClasse
    {
        public static object PegarAtributo(object src, string propName)
        {
            return src.GetType().GetProperty(propName).GetValue(src, null);
        }

        public static Dictionary<string, object> GetPropertyAttributes(PropertyInfo property)
        {
            Dictionary<string, object> attribs = new Dictionary<string, object>();
            foreach (CustomAttributeData attribData in property.GetCustomAttributesData())
            {

                if (attribData.ConstructorArguments.Count == 1)
                {
                    string typeName = attribData.Constructor.DeclaringType.Name;
                    if (typeName.EndsWith("Attribute")) typeName = typeName.Substring(0, typeName.Length - 9);
                    attribs[typeName] = attribData.ConstructorArguments[0].Value;
                }

            }
            return attribs;
        }

        public static void DefineValorObjeto(string propertyName, object value, object obj)
        {
            PropertyInfo propertyInfo = obj.GetType().GetProperty(propertyName);
            // make sure object has the property we are after
            if (propertyInfo != null)
            {
                if (propertyInfo.PropertyType.AssemblyQualifiedName.IndexOf("System.Decimal") != -1)
                {
                    propertyInfo.SetValue(obj, Convert.ToDecimal(value), null);
                }
                else if (propertyInfo.PropertyType.AssemblyQualifiedName.IndexOf("System.Int32") != -1)
                {
                    propertyInfo.SetValue(obj, Convert.ToInt32(value), null);
                }
                else
                {
                    propertyInfo.SetValue(obj, value, null);
                }
            }
        }
    }
}
