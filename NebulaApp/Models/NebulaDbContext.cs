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

        public DbSet<Address> Addresses { get; set; }

        public DbSet<Department> Departments { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-OUREU1H\\SQLEXPRESS;Initial Catalog=NebulaDB;User ID=sa;Password=1234; Trust Server Certificate=True");
        }
    }
}
