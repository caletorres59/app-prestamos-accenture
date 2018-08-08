using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GestionPrestamosAspNetCore.Modelo
{
    [Table ("Usuarios")]
    public class Usuario
    {
        [Key]
        public int id{ get; set; }
        public int identificacion_usuario { get; set;}
        public String nombre { get; set; }
        public String apellido { get; set; }
        public String usuario { get; set; }
        public String contrasenia { get; set; }



  }
}
