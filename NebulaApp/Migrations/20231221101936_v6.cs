using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NebulaApp.Migrations
{
    /// <inheritdoc />
    public partial class v6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Departments_DepartmentDeptID",
                table: "Employees");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.DropIndex(
                name: "IX_Employees_DepartmentDeptID",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "DepartmentDeptID",
                table: "Employees");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DepartmentDeptID",
                table: "Employees",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    DeptID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "varchar(250)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.DeptID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DepartmentDeptID",
                table: "Employees",
                column: "DepartmentDeptID");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Departments_DepartmentDeptID",
                table: "Employees",
                column: "DepartmentDeptID",
                principalTable: "Departments",
                principalColumn: "DeptID");
        }
    }
}
