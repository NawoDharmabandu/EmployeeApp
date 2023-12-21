using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using static NebulaApp.Models.Enum;

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

        public DepartmentEnum DepartmentID { get; set; }

        [Column(TypeName = "varchar(500)")]
        public string? Address { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime CreatedDate { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime? ModifiedDate { get; set; }
    }
}
