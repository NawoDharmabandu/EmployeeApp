using Microsoft.EntityFrameworkCore;

namespace NebulaApp.Models
{
    public class NebulaDbContext : DbContext
    {
        public NebulaDbContext()
        {
        }

        public NebulaDbContext(DbContextOptions<NebulaDbContext> options) : base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }


    }
}
