using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NebulaApp.Models;
using NebulaApp.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace NebulaApp.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly NebulaDbContext _employeeContext;
        public EmployeeService(NebulaDbContext employeeContext)
        {
            _employeeContext = employeeContext;
        }
        public async Task<ActionResult<IEnumerable<Employee>>> GetAllEmployee()
        {
            return await _employeeContext.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            var employee = await _employeeContext.Employees.FindAsync(id);
            return employee;
        }

        public async Task<ActionResult<Employee>> CreateEmployee(Employee employee)
        {
            employee.CreatedDate = DateTime.Now;
            employee.ModifiedDate = null;

            _employeeContext.Employees.Add(employee);
            await _employeeContext.SaveChangesAsync();

            return employee;
        }

        public async Task<ActionResult<Employee>> EditEmployee(int id, Employee employee)
        {
            var existingEmployee = await _employeeContext.Employees
            .FirstOrDefaultAsync(e => e.EmpID == id);

            if (existingEmployee != null)
            {
                existingEmployee.FirstName = employee.FirstName;
                existingEmployee.LastName = employee.LastName;
                existingEmployee.Gender = employee.Gender;
                existingEmployee.DateOfBirth = employee.DateOfBirth;
                existingEmployee.BasicSalary = employee.BasicSalary;
                existingEmployee.ModifiedDate = DateTime.Now;
                existingEmployee.DepartmentID = employee.DepartmentID;
                existingEmployee.Address = employee.Address;

                try
                {
                    await _employeeContext.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    throw;
                }
            }

            return existingEmployee;
        }

        public async Task<Employee> DeleteEmployee(int id)
        {
            var employee = await _employeeContext.Employees
                .FirstOrDefaultAsync(e => e.EmpID == id);

            if (employee != null)
            {
                _employeeContext.Employees.Remove(employee);
                await _employeeContext.SaveChangesAsync();
            }

            return employee;
        }

       
    }
}
