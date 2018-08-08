using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GestionPrestamosAspNetCore.Modelo;

namespace GestionPrestamosAspNetCore.Models
{
    public class GestionPrestamosAspNetCoreContext : DbContext
    {
        public GestionPrestamosAspNetCoreContext (DbContextOptions<GestionPrestamosAspNetCoreContext> options)
            : base(options)
        {
        }

        public DbSet<GestionPrestamosAspNetCore.Modelo.Usuario> Usuario { get; set; }
    }
}
