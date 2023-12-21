using Microsoft.AspNetCore.Mvc;
using NebulaApp.Models;

namespace NebulaApp.Services
{
    public interface IEmployeeService
    {
        Task<ActionResult<IEnumerable<Employee>>> GetAllEmployee();
        Task<Employee> GetEmployeeById(int id);
        Task<ActionResult<Employee>> CreateEmployee(Employee employee);
        Task<ActionResult<Employee>> EditEmployee(int id, Employee employee);
        Task<Employee> DeleteEmployee(int id);
    }
}
