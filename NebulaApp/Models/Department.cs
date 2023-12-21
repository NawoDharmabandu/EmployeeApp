using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NebulaApp.Models
{
    public class Department
    {
        [Key]
        public int DeptID { get; set; }

        [Column(TypeName = "varchar(250)")]
        public string? Name { get; set; }
        //public virtual ICollection<Employee>? Employees { get; set; }
    }
}
