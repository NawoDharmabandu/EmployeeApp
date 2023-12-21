using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace NebulaApp.Models
{
    public class Address
    {
        [Key]
        public int AddressID { get; set; }

        [Column(TypeName = "varchar(250)")]
        public string? AddressLine { get; set; }

        [Column(TypeName = "varchar(250)")]
        public string? AddressLine2 { get; set; }

        [Column(TypeName = "varchar(250)")]
        public string? City { get; set; }

        [Column(TypeName = "varchar(250)")]
        public string? PostCode { get; set; }
        //public virtual ICollection<Employee>? Employees { get; set; }
    }
}
