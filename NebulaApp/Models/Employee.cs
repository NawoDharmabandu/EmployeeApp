using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace NebulaApp.Models
{
    public class Employee
    {
        [Key]
        public int EmpID { get; set; }

        [Required]
        [Column(TypeName = "varchar(250)")]
        public string? FirstName { get; set; }

        [Required]
        [Column(TypeName = "varchar(250)")]
        public string? LastName { get; set; }

        [Column(TypeName = "varchar(250)")]
        public string? Gender { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime DateOfBirth { get; set; }

        [Column(TypeName = "decimal(38, 2)")]
        public decimal? BasicSalary { get; set; }

        [Column(TypeName = "int")]
        public int DepartmentID { get; set; }

        [Column(TypeName = "int")]
        public int AddressID { get; set; }

        // Navigation properties
        //public virtual Department? Department { get; set; }

        //public virtual Address? Address { get; set; }
    }
}
